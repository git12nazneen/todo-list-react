import React, { useState } from 'react'

const TodoForm = () => {
  const [value, setValue] = useState("")
  return (
    <form className='TodoForm'>
      <input type="text" placeholder='write your todo' className='todo-input' onChange={(e)=>console.log(e.target.value)}  />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
