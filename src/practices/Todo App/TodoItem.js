import React from 'react';
import '../practice.css'

function TodoItem(props) {

  const completedStyles ={
   color: props.item.completed && "red",
   textDecoration: props.item.completed && "line-through"
  }
    return (
        <div className='todo-item'>
            <input
             type="checkbox" 
           checked={props.item.completed}
            onChange={() => props.handleChange(props.item.id) } />
          <p style={ completedStyles}>{props.item.text}</p>
        </div>
    );
}

export default TodoItem;
