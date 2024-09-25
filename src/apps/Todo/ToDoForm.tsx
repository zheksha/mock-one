import { useState } from 'react'

function ToDoForm({ addTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a task"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Add Task
      </button>
    </form>
  )
}

export default ToDoForm
