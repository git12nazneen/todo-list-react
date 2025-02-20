import React from 'react'
import { FilePenLine, Trash2 } from 'lucide-react';
const Todo = ({todo, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={()=>toggleComplete(todo.id)} className={`${todo.completed?"completed" :""}`}>{todo.task}</p>
      <div>
      <FilePenLine onClick={()=>editTodo(todo.id)}/>
      <Trash2 onClick={()=>deleteTodo(todo.id)} />
      </div>
    </div>
  )
}

export default Todo
