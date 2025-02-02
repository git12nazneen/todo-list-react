import React from 'react'
import { FilePenLine, Trash2 } from 'lucide-react';
const Todo = ({todo}) => {
 const {task} = todo
 console.log('h' , todo)
  return (
    <div className='Todo'>
      <p>{task}</p>
      <div>
      <FilePenLine />
      <Trash2 />
      </div>
    </div>
  )
}

export default Todo
