import React from "react";
import { Todo } from "./types"; // Import the Todo type

interface ToDoItemProps {
  todo: Todo;
  index: number;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
  todo,
  index,
  completeTodo,
  removeTodo,
}) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.isCompleted ? "list-group-item-success" : ""
      }`}
    >
      <span style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.task}
      </span>
      <div>
        <button
          className={`btn btn-${todo.isCompleted ? "warning" : "success"} me-2`}
          onClick={() => completeTodo(index)}
        >
          {todo.isCompleted ? "Undo" : "Complete"}
        </button>
        <button className="btn btn-danger" onClick={() => removeTodo(index)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
