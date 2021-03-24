import ToDoDetail from "../ToDoList/ToDoDetail";
import PropTypes from "prop-types";

ToDoList.propTypes = {
  todos: PropTypes.array,
};

ToDoList.defaultProps = {
  todos: [],
};

function ToDoList(props) {
  let { todos } = props;
  const onUpdate = (id) => {
    props.onUpdate(id);
  };
  const onDelete = (id) => {
    props.onDelete(id);
  };
  return todos.map((todo, index) => {
    return (
      <ToDoDetail
        todo={todo}
        key={index}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    );
  });
}

export default ToDoList;
