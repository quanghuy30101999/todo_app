import React from "react";
import PropTypes from "prop-types";
import AlertDialog from "../AlertDialog/AlertDialog";
import TodoService from "../../services/todo.service";

ToDoDetail.propTypes = {
  todo: PropTypes.object,
};

ToDoDetail.defaultProps = {
  todo: {},
};

function ToDoDetail(props) {
  let { todo } = props;
  let className = todo.completed ? "completed" : null;
  let key = todo.key;
  const onUpdate = (id, e) => {
    async function updateTodoList() {
      try {
        await TodoService.updateTodoList(id, e.target.checked);
        props.onRefresh();
      } catch (error) {
        console.log(error);
      }
    }
    updateTodoList();
  };
  const onDelete = (id) => {
    async function deleteTodoList() {
      try {
        await TodoService.deleteTodoList(id);
        props.onRefresh();
      } catch (error) {
        console.log(error);
      }
    }
    deleteTodoList();
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
