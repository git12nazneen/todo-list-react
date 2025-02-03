import React from 'react'
import { FilePenLine, Trash2 } from 'lucide-react';
const Todo = ({todo, toggleComplete}) => {
  return (
    <div className='Todo'>
      <p onClick={()=>toggleComplete(todo.id)} className={`${todo.completed?"completed" :""}`}>{todo.task}</p>
      <div>
      <FilePenLine />
      <Trash2 />
      </div>
    </div>
  )
}

export default Todo
