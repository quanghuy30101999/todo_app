import AlertDialog from "../AlertDialog/AlertDialog";
import TodoService from "../../services/todo.service";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../ToDoApp/todoSlice";
import { Todo } from '../../models/todo.model';
import React from "react";
interface IProps {
  todo: Todo,
}

function ToDoDetail(props: IProps): JSX.Element {
  const { todo } = props;
  const className = new Todo(todo).getClassName();
  const dispatch = useDispatch();
  const onUpdate = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    TodoService.updateTodoList(id, e.target.checked).then((data) => {
      dispatch(updateTodo(data))
    })
  }
  const onDelete = (id: number) => {
    TodoService.deleteTodoList(id).then(() => {
      dispatch(deleteTodo(id))
    })
  };
  return (
    <li className={className} >
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => onUpdate(todo.id, e)}
          />
          {todo.content} <i className="input-helper" />
        </label>
      </div>
      <AlertDialog todo={todo} onDelete={onDelete} />
    </li>
  );
}

export default ToDoDetail;
