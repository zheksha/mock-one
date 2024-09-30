import ToDoItem from "./ToDoItem";

function ToDoList({ todos, completeTodo, removeTodo }) {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <ToDoItem
          className="btn btn-primary"
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
