import PropTypes from "prop-types";
import AlertDialog from "../AlertDialog/AlertDialog";
import TodoService from "../../services/todo.service";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../ToDoApp/todoSlice";

ToDoDetail.propTypes = {
  todo: PropTypes.object,
};

ToDoDetail.defaultProps = {
  todo: {},
};

function ToDoDetail(props: any) {
  let { todo } = props;
  let className = todo.completed ? "completed" : undefined;
  let key = todo.key;
  const dispatch = useDispatch();
  const onUpdate = (id: number, e: any) => {
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
    <li className={className} key={key}>
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
