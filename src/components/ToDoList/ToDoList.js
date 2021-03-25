import ToDoDetail from "../ToDoList/ToDoDetail";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import TodoService from "../../services/todo.service";

ToDoList.propTypes = {
  todos: PropTypes.array,
};

ToDoList.defaultProps = {
  todos: [],
};

function ToDoList(props) {
  const [todos, setTodos] = useState([]);

  const onRefresh = () => {
    props.onRefresh();
  };

  useEffect(() => {
    async function getTodoList() {
      try {
        setTodos(await TodoService.getTodoList());
      } catch (error) {
        console.log(error);
      }
    }
    getTodoList();
  }, [props.refresh]);
  return todos.map((todo, index) => {
    return <ToDoDetail todo={todo} key={index} onRefresh={onRefresh} />;
  });
}

export default ToDoList;
