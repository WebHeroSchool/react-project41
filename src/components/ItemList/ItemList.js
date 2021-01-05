import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ thingToDo }) => (
	<div>
		{thingToDo.map(item => <div className={styles.item} key={item.task}><Item task={item.task} done={item.done}/></div>)}
	</div>
);

export default ItemList;