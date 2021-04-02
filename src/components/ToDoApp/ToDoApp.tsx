import { useEffect } from "react";
import { useSelector } from "react-redux";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import TodoService from "../../services/todo.service";
import { showTodo } from "./todoSlice";
import { useDispatch } from "react-redux";
import { ITodo } from '../../model/todo.module'
import { AxiosError } from "axios";
interface IState {
  todos: ITodo[]
}

function TodoApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    TodoService.getTodoList().then((data: ITodo[]) => {
      const action = showTodo(data)

      dispatch(action);
    }).catch((error: AxiosError) => {
      throw error;
    })
  }, []);

  const todos = useSelector((state: IState) => (state.todos));

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Awesome Todo list</h4>
                <ToDoForm />
                <div className="list-wrapper">
                  <ul className="d-flex flex-column-reverse todo-list">
                    <ToDoList todos={todos} />
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
