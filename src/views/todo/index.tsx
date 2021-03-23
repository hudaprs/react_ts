import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([
    {
      id: Math.random(),
      title: 'Learn TS',
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: 'React With Ts',
      isCompleted: true,
    },
  ])

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === selectedTodo.id
        ? { ...selectedTodo, isCompleted: !todo.isCompleted }
        : todo
    )

    setTodos(updatedTodos)
  }

  const addTodo: AddTodo = (newTodo) => {
    setTodos([
      ...todos,
      { id: Math.random(), title: newTodo, isCompleted: false },
    ])
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </>
  )
}

export default Todo
