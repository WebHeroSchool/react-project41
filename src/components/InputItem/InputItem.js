import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class InputItem extends React.Component {
  state = {
    inputTask: ''
  };

  onButtonClick = () => {
    if (this.state.inputTask === '') {
      this.setState({error: true, helperText: 'Введите задание!'});
    } else {
      this.setState({
        inputTask: '',
        error: false,
        helperText: ''
      });
      this.props.onClickAdd(this.state.inputTask);
    }
  };

  render() {
    const { onClickAdd } = this.props;

    return (<div className={styles.input}>
      <TextField
        className={styles.inputTask}
        id="outlined-full-width"
        style={{ margin: 0 }}
        placeholder="Добавить задание"
        fullWidth
        margin="normal"
        variant="outlined"
        error = {this.state.error}
        helperText = {this.state.helperText}
        value = {this.state.inputTask}
        onChange = {event => this.setState({ inputTask: event.target.value.toUpperCase() })}
      />
      <Button 
        variant="contained"
        color="primary"
        fullWidth
        onClick = {this.onButtonClick}
      >
        Добавить задание
      </Button>
    </div>); 
  }
};

InputItem.propTypes = {
  onClickAdd: PropTypes.func.isRequired
};

export default InputItem;

