import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TodoService from "../../services/todo.service";
import { addTodo } from "../ToDoApp/todoSlice";

const ToDoForm = () => {
  const [message, setMessage] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const onAddToDo = () => {
    if (content.length === 0) {
      setMessage("This field is required ");
    } else {
      TodoService.addTodoList(content, false).then(todo => {
        dispatch(addTodo(todo))
      })
      setContent("");
      setMessage("");
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      onAddToDo();
    }
  };

  const onChange = (e: any) => {
    setContent(e.target.value);
  };
  return (
    <React.Fragment>
      {message && (
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      )}
      <div className="add-items d-flex">
        <input
          type="text"
          className="form-control todo-list-input"
          placeholder="What do you need to do today?"
          onChange={onChange}
          value={content}
          onKeyUp={handleKeyPress}
        />

        <button
          className="add btn btn-primary font-weight-bold todo-list-add-btn"
          onClick={onAddToDo}
        >
          Add
        </button>
      </div>
    </React.Fragment>
  );
};

export default ToDoForm;
