import React from 'react'
import TodoItem from './TodoItem'
import '../practice.css'

function Todos(props) {

     const todosComp = props.todos.map( todo => <TodoItem  key={todo.id}  item ={todo} handleChange ={props.handleChange}  />)
    return (
        <div className="todo-list">
                {todosComp}
        </div>
    )
}

export default Todos;