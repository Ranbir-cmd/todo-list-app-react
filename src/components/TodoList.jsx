import React from "react";

const TodoList = ({ addTodo, editHandler, deleteHandler }) => {
  return (
    <ul className="todo-ul">
      {addTodo.map((oneTodo) => (
        <li className="todo-li">
          <span className="todo-li-text" key={oneTodo.id}>
            {oneTodo.inputData}
          </span>
          <button onClick={() => editHandler(oneTodo.id)}>Edit</button>
          <button onClick={() => deleteHandler(oneTodo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
