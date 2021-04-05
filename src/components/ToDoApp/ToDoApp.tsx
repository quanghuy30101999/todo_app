import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ToDoForm from '../ToDoForm/ToDoForm';
import ToDoList from '../ToDoList/ToDoList';
import { getTodoList } from '../../services/todo.service';
import { showTodo } from './ToDoSlice';
import { useDispatch } from 'react-redux';
import { Todo } from '../../models/todo.model';
import { AxiosError } from 'axios';
import { plainToClass } from 'class-transformer';
interface IState {
  todos: Todo[];
}

function TodoApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    getTodoList()
      .then((data) => {
        const action = showTodo(data);

        dispatch(action);
      })
      .catch((error: AxiosError) => {
        throw error;
      });
  }, []);

  const todos = plainToClass(
    Todo,
    useSelector((state: IState) => state.todos)
  );

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
