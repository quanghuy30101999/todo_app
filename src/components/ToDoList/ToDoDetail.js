import React from "react";
import PropTypes from "prop-types";
import AlertDialog from "../AlertDialog/AlertDialog";

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
  const onUpdate = (id) => {
    props.onUpdate(id);
  };
  const onDelete = (id) => {
    props.onDelete(id);
  };
  return (
    <li className={className} key={key}>
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => onUpdate(todo.id)}
          />
          {todo.content} <i className="input-helper" />
        </label>
      </div>
      <AlertDialog todo={todo} onDelete={onDelete} />
      {/* <i
        className="remove mdi mdi-close-circle-outline"
        onClick={() => onDelete(todo.id)}
      /> */}
    </li>
  );
}

export default ToDoDetail;
