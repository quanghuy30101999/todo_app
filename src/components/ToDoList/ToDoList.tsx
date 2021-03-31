import ToDoDetail from "../ToDoList/ToDoDetail";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import TodoService from "../../services/todo.service";

ToDoList.propTypes = {
  todos: PropTypes.array,
  refresh: PropTypes.bool,
  onRefresh: PropTypes.func
};

ToDoList.defaultProps = {
  todos: [],
};

function ToDoList(props: any): any {
  const [todos, setTodos] = useState([]);

  const onRefresh = (): void => {
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
