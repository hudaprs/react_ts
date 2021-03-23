import React from 'react'
import './style.css'

interface TodoItemInterfaceProps {
  todo: Todo
  toggleTodo: ToggleTodo
}

const TodoItem: React.FC<TodoItemInterfaceProps> = ({ todo, toggleTodo }) => {
  return (
    <>
      <ul>
        <li className="flex">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => toggleTodo(todo)}
          />
          <p className={todo.isCompleted ? 'is-completed' : undefined}>
            {todo.title}
          </p>
        </li>
      </ul>
    </>
  )
}

export default TodoItem
