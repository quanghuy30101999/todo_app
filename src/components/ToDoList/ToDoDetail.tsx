import React from "react";
import PropTypes from "prop-types";
import AlertDialog from "../AlertDialog/AlertDialog";
import TodoService from "../../services/todo.service";

ToDoDetail.propTypes = {
  todo: PropTypes.object,
  onRefresh: PropTypes.any
};



ToDoDetail.defaultProps = {
  todo: {},
};

function ToDoDetail(props: any) {
  let { todo } = props;
  let className = todo.completed ? "completed" : undefined;
  let key = todo.key;
  const onUpdate = (id: number, e: any) => {
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
  const onDelete = (id: number) => {
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
