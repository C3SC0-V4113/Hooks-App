import { TodoList, TodoAdd } from "./";
import { useTodo } from "../hooks";

export const TodoApp = () => {
  const {
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    pendingTodosCount,
    todosCount,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp ({todosCount()}){" "}
        <small>pendientes: {pendingTodosCount()}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
