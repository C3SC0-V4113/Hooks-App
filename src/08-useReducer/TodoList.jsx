import propTypes from "prop-types";
import { TodoItem } from "./";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: propTypes.array.isRequired,
  onDeleteTodo: propTypes.func.isRequired,
  onToggleTodo: propTypes.func.isRequired,
};
