type Todo = {
  id: number
  title: string
  isCompleted: boolean
}

type ToggleTodo = (todo: Todo) => void

type AddTodo = (newTodo: string) => void
