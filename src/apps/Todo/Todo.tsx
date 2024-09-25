import { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

function Todo() {
  // TODO #7 Add types for the `todos`
  const [todos, setTodos] = useState([])

  // TODO #2 Add Functionality to add todos
  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, isCompleted: false }])
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  // TODO #3 Fix Functionality to remove todos
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <div>
      <h1 className="text-center my-4">ToDo App</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  )
}

export default Todo
