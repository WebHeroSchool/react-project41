import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div className={styles.input}>
	<TextField
	  id="outlined-full-width"
    style={{ margin: 0 }}
    placeholder="Добавить задание"
    fullWidth
    margin="normal"
    InputLabelProps={{
	    shrink: true,
    }}
    variant="outlined"
  />
</div>);

export default InputItem;