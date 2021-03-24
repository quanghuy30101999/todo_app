import React, { useState } from "react";
import "./App.css";
import TodoApp from "./components/todoApp";
import data from "./mock_data";
function App() {
  const [newTodo, setTodo] = useState("");
  const [newData, setdata] = useState(data);
  const [message, setMessage] = useState("");
  let newElement = {
    id: data.length,
    completed: false,
    content: newTodo,
  };
  const onAddToDo = () => {
    if (newElement.content.length === 0) {
      setMessage("This field is required ");
    } else {
      setdata((data) => [...data, newElement]);
      setTodo("");
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onAddToDo();
    }
  }

  const onRemove = (id) => {
    let index = newData.findIndex( todo => todo.id === id );
    console.log(index);
    if (index === -1) {
      return;
    }
    const newData2 = [...newData]
    newData2.splice(index, 1);
    setdata(newData2);
  }

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Awesome Todo list</h4>
                {message && (
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                )}
                <div className="add-items d-flex">
                  <input
                    type="text"
                    className="form-control todo-list-input"
                    placeholder="What do you need to do today?"
                    onChange={(e) => setTodo(e.target.value)}
                    value={newTodo}
                    onKeyUp={handleKeyPress}
                  />

                  <button
                    className="add btn btn-primary font-weight-bold todo-list-add-btn"
                    onClick={onAddToDo}
                  >
                    Add
                  </button>
                </div>
                <div className="list-wrapper">
                  <ul className="d-flex flex-column-reverse todo-list">
                    <TodoApp data={newData} removeTodo={onRemove}/>
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

export default App;
