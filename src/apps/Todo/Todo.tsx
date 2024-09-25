import { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

function Todo() {
  const [todos, setTodos] = useState([])

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  const removeTodo = (index) => {
    setTodos([])
  }

  return (
    <div>
      <h1 className="text-center my-4">ToDo App</h1>
      <ToDoForm addTodo={() => {}} />
      <ToDoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  )
}

export default Todo
