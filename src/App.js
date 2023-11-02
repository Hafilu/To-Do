import React, { useState } from "react";
import "./App.css";
import Addform from "./Components/Addform";
import Todo from "./Components/Todo";
import Updateform from "./Components/Updateform";

function App() {
  const [todos, settoDos] = useState([]);
  const [todo, settoDo] = useState("");
  const [updatedtodo, setupdatedtoDo] = useState("");

  const addTask = () => {
    if (todo) {
      let num = todos.length + 1;
      let newentry = { id: num, title: todo, status: false };
      settoDos([...todos, newentry]);
      settoDo("");
    }
  };

  const deleteTask = (id) => {
    let newtask = todos.filter((task) => task.id !== id);
    settoDos(newtask);
  };

  const markDone = (id) => {
    let newtask = todos.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    settoDos(newtask);
  };

  const cancelUpdate = () => {
    setupdatedtoDo("");
  };

  const changeTask = (e) => {
    let newtask = {
      id: updatedtodo.id,
      title: e.target.value,
      status: updatedtodo.status ? true : false,
    };

    setupdatedtoDo(newtask);
  };

  const updateTask = () => {
    let filterrecords = [...todos].filter((task) => task.id !== updatedtodo.id);
    let updatedobject = [...filterrecords, updatedtodo];
    settoDos(updatedobject);
    setupdatedtoDo("");
  };

  return (
    <div className="container App">
      <br />
      <br />
      <h1>ToDo App</h1>
      <br />
      <br />

      {updatedtodo && updatedtodo ? (
        <Updateform
          updatedtodo={updatedtodo}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <Addform todo={todo} settoDo={settoDo} addTask={addTask} />
      )}

      {todos && todos.length ? "" : "No Tasks To Display"}
      <Todo
        todos={todos}
        markDone={markDone}
        setupdatedtoDo={setupdatedtoDo}
        deleteTask={deleteTask}
      />
    </div>
  );
}
export default App;
