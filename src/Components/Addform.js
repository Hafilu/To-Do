import React from "react";

function Addform({ todo, settoDo, addTask }) {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={todo}
            onChange={(e) => settoDo(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn-lg btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br />
    </>
  );
}

export default Addform;
