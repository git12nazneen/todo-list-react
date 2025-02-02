import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")
  const handleSubmit = e =>{
    e.preventDefault()
    addTodo(value)
    setValue("")   //clear the value
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder='write your todo' className='todo-input' onChange={(e)=>setValue(e.target.value)}  />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
