import React, { useState } from 'react'

const TodoForm = () => {
  const [value, setValue] = useState("")
  const handleSubmit = e =>{
    e.preventDefault()
    console.log('Form submitted with value: ', value)
  
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" placeholder='write your todo' className='todo-input' onChange={(e)=>setValue(e.target.value)}  />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
