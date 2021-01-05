import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
	state = {
		thingToDo: [
			{
				task: 'Сдать урок по React',
				done: false
			},
			{
				task: 'Прочитать книгу',
				done: false
			},
			{
				task: 'Посмотреть фильм',
				done: true
			}
		]
	};
	render () {
		return (
			<div className={styles.wrap}>
		    <h1 className={styles.title}>Мои списки дел:</h1>
		    <InputItem />
		    <ItemList thingToDo = {this.state.thingToDo} />
		    <Footer count = {3} />
			</div>
		);
	}
};

export default App;