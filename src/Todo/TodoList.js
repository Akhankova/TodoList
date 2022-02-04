import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles = {
ul: {
  listStyle: 'none',
  margin: 0,
  padding: 0,
}
}

function TodoList (props) {
  console.log(props.toDos);
    return (
      <ul style={styles.ul}>
        {props.toDos.map((todo, index) => {
          return <TodoItem 
          todo={todo} 
          key={todo.id} 
          index={index}
          onChange={props.onToggle}/>})}
      </ul>
    )
}

TodoList.propTypes = {
  toDos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default TodoList
