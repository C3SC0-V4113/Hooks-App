import propTypes from "prop-types";
import { useForm } from "../hooks";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit} aria-label="form">
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        value={description}
        onChange={onInputChange}
        name="description"
      />
      <button type="submit" className="btn btn-primary mt-4">
        Agregar
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  onNewTodo: propTypes.func.isRequired,
};
