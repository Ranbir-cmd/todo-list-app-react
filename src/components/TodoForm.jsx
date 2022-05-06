import React from "react";

const TodoForm = ({ todoSubmitHandler, inputData, setInputData, editId }) => {
  return (
    <form onSubmit={todoSubmitHandler}>
      <input
        type="text"
        placeholder="Task"
        value={inputData}
        onChange={(event) => setInputData(event.target.value)}
      />
      <button type="submit">{editId ? "Edit" : "Add Task"}</button>
    </form>
  );
};

export default TodoForm;
