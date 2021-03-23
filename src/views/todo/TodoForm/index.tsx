import React, { ChangeEvent, FormEvent, useState } from 'react'

interface TodoFormPropsInterface {
  addTodo: AddTodo
}

const TodoForm: React.FC<TodoFormPropsInterface> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('')

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    newTodo.trim() && addTodo(newTodo)

    setNewTodo('')
  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={onHandleChange} />
      <button type="submit" onClick={onSubmit}>
        Add todo
      </button>
    </form>
  )
}

export default TodoForm
