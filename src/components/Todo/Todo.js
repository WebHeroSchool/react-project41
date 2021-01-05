import React,{ useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
	const initialState = {
		thingToDo: [
			{
				task: 'Сдать урок по React',
				done: false,
				id: 1
			},
			{
				task: 'Прочитать книгу',
				done: false,
				id: 2
			},
			{
				task: 'Посмотреть фильм',
				done: true,
				id: 3
			}
		],
		count: 3
	};

	const [thingToDo, setThingToDo] = useState(initialState.thingToDo);
	const [count, setCount] = useState(initialState.count);

	// useEffect(() => {
	// 	console.log('обновлено');
	// });
	// useEffect(() => {
	// 	console.log('смонтировано');
	// }, []);
	// useEffect(() => {
	// 	console.log('изменился count');
	// }, [count]);  

	const onClickDone = id => {
		const newItemList = thingToDo.map(item => {
			const newItem = { ...item };
			if (item.id === id) {
				newItem.done = !item.done
			};
			return newItem;
		});
		setThingToDo(newItemList);
	};

	const onClickDelete = id => {
		const newItemList = thingToDo.filter(item => item.id !== id);
		setThingToDo(newItemList);
		setCount((count) => count - 1)
	};

	const onClickAdd = task => {
		const newThingToDo = [
			...thingToDo,
			{
				task,
				done: false,
				id: count + 1
			}
		];
		setThingToDo(newThingToDo);
		setCount((count) => count + 1);
	};

	return (
		<div className={styles.wrap}>
	    <h1 className={styles.title}>Мои списки дел:</h1>
	    <InputItem onClickAdd = {onClickAdd} />
	    <ItemList 
	    	thingToDo = {thingToDo}
	    	onClickDone = {onClickDone} 
	    	onClickDelete = {onClickDelete} 
	    />
	    <Footer count = {count} />
		</div>
	);
};

export default Todo;