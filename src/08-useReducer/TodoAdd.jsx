import { useState } from "react";

export const TodoAdd = ({ onNewTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form
      onSubmit={() =>
        onNewTodo({
          id: new Date().getTime(),
          description: inputValue,
          done: false,
        })
      }
      aria-label="form"
    >
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        value={inputValue}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-primary mt-4">
        Agregar
      </button>
    </form>
  );
};
