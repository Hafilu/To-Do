import React from "react";

function ToDo({ todos, markDone, setupdatedtoDo, deleteTask }) {
  return (
    <div>
      {todos &&
        todos
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber ">{index + 1}</span>
                    <span className="taskText ">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <i
                      class="fa-solid fa-circle-check"
                      title="Completed / Not Completed"
                      onClick={(e) => markDone(task.id)}
                    ></i>
                    {task.status ? null : (
                      <i
                        class="fa-solid fa-pen"
                        title="Edit"
                        onClick={() =>
                          setupdatedtoDo({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                          })
                        }
                      ></i>
                    )}
                    <i
                      class="fa-solid fa-trash"
                      title="Delete"
                      onClick={() => deleteTask(task.id)}
                    ></i>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
}

export default ToDo;
