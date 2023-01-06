import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const { addTodo , setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    //TODO
    setOpenModal(false)
  };

  const onSubmit = (e) => {
    //TODO
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false)
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo Todo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="escribe algo"
      />

      <div className="TodoForm-buttonContainer">
        <button type="button" onClick={onCancel} className="Todo-Form-button TodoForm-button--cancel">
          Cancelar
        </button>
        <button type="submit" className="Todo-Form-button TodoForm-button--add">Agregar</button>
      </div>
    </form>
  );
}

export { TodoForm };
