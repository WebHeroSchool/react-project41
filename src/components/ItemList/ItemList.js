import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

const ItemList = ({ thingToDo, onClickDone, onClickDelete }) => (
	<div>
		{thingToDo.map(item => <div className={styles.item} key={item.task}>
			<Checkbox
        color="primary"
				checked={item.done}
      	tabIndex={-1}
        onClick={() => onClickDone(item.id)}
      />
      <Item task={item.task} done={item.done} />
      <IconButton  
				aria-label="Delete" 
				className={styles.delete}>
     		<DeleteIcon onClick={() => onClickDelete(item.id)} />
     	</IconButton>
		</div>)}
	</div>
);

ItemList.propTypes = {
	thingToDo: PropTypes.array.isRequired,
	onClickDone: PropTypes.func.isRequired,
	onClickDelete: PropTypes.func.isRequired
};

export default ItemList;

