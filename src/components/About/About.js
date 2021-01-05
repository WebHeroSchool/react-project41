import React from 'react';
import styles from './About.module.css';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoadingRepo: true,
		isLoadingUser: true,
		repoList: [],
		errorUser: false,
		errorRepo: false
	}

	componentDidMount() {
		octokit.repos.listForUser({
			username: 'tzAriadna'
		}).then(({ data }) => {
			this.setState({
				repoList: data,
				isLoadingRepo: false
			})
		}).catch(err => {
      this.setState({
          errorRepo: true,
          isLoadingRepo: false
      })
	  });

		octokit.users.getByUsername({
			username: 'tzAriadna'
		}).then(({ data })=> {
			this.setState({
				userInfo: data,
				isLoadingUser: false
			})
		}).catch(err => {
      this.setState({
          errorUser: true,
          isLoadingUser: false
      })
	  });
	}

	render() {
		const { isLoadingRepo, isLoadingUser, repoList, userInfo, errorUser, errorRepo } = this.state;

		return (
			<CardContent>
				<div className = {styles.wrap}>{(isLoadingRepo && isLoadingUser) ? <CircularProgress color="secondary" /> : 
					<div>
						{!isLoadingUser && <div>
							{errorUser ? <div className={styles.error}>Ошибка: Такого пользователся не существует </div> : <div>
								<h1>Обо мне</h1>
								<img className = {styles.img} src={userInfo.avatar_url} />
								<a href={userInfo.html_url}>{userInfo.name}</a>
								<p>{userInfo.bio}</p>
							</div>}
						</div>}
						
						{!isLoadingRepo && <ol>
							{errorRepo ? <div className={styles.error}>Ошибка: Репозитории не найдены </div> : <div>
								<h2>Мои репозитории</h2>
								{repoList.map(repo => (
									<li key={repo.id}>
										<a href={repo.html_url}>
											{repo.name}
										</a>
									</li>))
								}
							</div>}
						</ol>}
					</div>
				}</div>
			</CardContent>
		)
	}
};


export default About;