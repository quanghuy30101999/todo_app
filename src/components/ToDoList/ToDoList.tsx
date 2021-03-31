import ToDoDetail from "../ToDoList/ToDoDetail";
import PropTypes from "prop-types";

ToDoList.propTypes = {
  todos: PropTypes.array,
};

ToDoList.defaultProps = {
  todos: [],
};

function ToDoList(props: any): any {
  let { todos } = props;

  return todos.map((todo: object, index: number) => {
    return <ToDoDetail todo={todo} key={index} />;
  });
}

export default ToDoList;
