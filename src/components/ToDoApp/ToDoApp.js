import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import mock_data from "../../mock_data";
import { useState } from "react";

function TodoApp() {
  const [todoList, setTodoList] = useState(mock_data);
  const addTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };
  const findTodo = (id) => {
    return todoList.findIndex((todo) => todo.id === id);
  };
  const onUpdate = (id) => {
    let index = findTodo(id);
    if (index === -1) {
      return;
    }
    let newTodoList = [...todoList];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  };
  const onDelete = (id) => {
    let index = findTodo(id);
    if (index === -1) {
      return;
    }
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };
  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Awesome Todo list</h4>
                <ToDoForm todos={todoList} addTodo={addTodo} />
                <div className="list-wrapper">
                  <ul className="d-flex flex-column-reverse todo-list">
                    <ToDoList
                      todos={todoList}
                      onUpdate={onUpdate}
                      onDelete={onDelete}
                    />
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
