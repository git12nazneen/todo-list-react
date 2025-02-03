import React, { useState } from 'react'

const TodoEditForm = ({editTodo, todo}) => {
  const [value, setValue] = useState("")
  const handleSubmit = e =>{
    e.preventDefault()
    editTodo(value, todo.id)
    setValue("")   //clear the value
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder='write your todo' className='todo-input' onChange={(e)=>setValue(e.target.value)}  />
      <button type='submit' className='todo-btn'>Edit task</button>
    </form>
  )
}

export default TodoEditForm
