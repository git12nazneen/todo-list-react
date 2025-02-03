import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
uuidv4()
const TodoWrapper = () => {
  const [todos, setTodos] = useState([])
  const addTodo = todo =>{
    setTodos([...todos , {id:uuidv4(), task:todo ,isEditing:false, completed:false}])
    console.log(todos)
  }
  const toggleComplete = id =>{
    setTodos(todos.map(todo=>todo.id===id? {...todo, completed:!todo.completed}:todo))
  }
  const deleteTodo = id =>{
    // setTodos(todos.filter(todo.id !== todo))
    setTodos(todos.filter(todo=> todo.id !== id))
  }
  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo,index)=>(
      <Todo todo={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
      ))}
    </div>
  )
}

export default TodoWrapper
