import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [inputData, setInputData] = useState("");
  const [addTodo, setAddTodo] = useState([]);
  const [editId, setEditId] = useState(0);

  // TODO ADDING LOGIC
  const todoSubmitHandler = (event) => {
    event.preventDefault();
    // is there anything in editId, means are we editing? if yes then this otherwise simply add
    if (editId) {
      // finding the todo we are editing
      const editedTodo = addTodo.find((todo) => todo.id === editId);
      // now add this
      const updatedTodo = addTodo.map(
        (t) =>
          t.id === editedTodo.id
            ? (t = { id: t.id, inputData })
            : { id: t.id, inputData: t.inputData }

        // if it is that todo, which we are editing currently, then what we are doing is: giving id and setting value = whatever u are typing means editing valu
      );

      setAddTodo(updatedTodo);
      setEditId(0);
      setInputData("");
      return;
    }
    if (inputData !== "") {
      setAddTodo([{ id: `${inputData}-${Date.now()}`, inputData }, ...addTodo]);
      // [{ id: '', new todo, existed todo }]
      setInputData("");
    }
  };

  // TODO DELETE LOGIC
  const deleteHandler = (id) => {
    const filteredTodo = addTodo.filter((td) => td.id !== id);
    setAddTodo([...filteredTodo]);
  };

  // TODO EDIT LOGIC
  const editHandler = (id) => {
    // 1. (a) the item you clicked to do edit, show that in input box
    const editTodo = addTodo.find((el) => el.id === id);
    // editTodo is an Object: id and todo element is there. here we want that todo element only
    setInputData(editTodo.inputData);

    // (b) turn the add button into edit
    setEditId(id);

    // now the last thing is after editing u have to save and that should reflect the list. for this go to submitHandler
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>Todo List App</h1>
        <TodoForm
          todoSubmitHandler={todoSubmitHandler}
          inputData={inputData}
          setInputData={setInputData}
          editId={editId}
        />
        <TodoList
          addTodo={addTodo}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    </div>
  );
}
export default App;
