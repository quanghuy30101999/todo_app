import { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";

function TodoApp() {
  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Awesome Todo list</h4>
                <ToDoForm onRefresh={onRefresh} />
                <div className="list-wrapper">
                  <ul className="d-flex flex-column-reverse todo-list">
                    <ToDoList refresh={refresh} onRefresh={onRefresh} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
