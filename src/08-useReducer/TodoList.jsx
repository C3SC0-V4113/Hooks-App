import propTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: propTypes.array.isRequired,
  onDeleteTodo: propTypes.func.isRequired,
};
