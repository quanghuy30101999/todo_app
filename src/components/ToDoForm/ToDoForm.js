import React, { useState } from "react";
import TodoService from "../../services/todo.service";

const ToDoForm = (props) => {
  const [message, setMessage] = useState("");
  const [content, setContent] = useState("");
  const onAddToDo = () => {
    if (content.length === 0) {
      setMessage("This field is required ");
    } else {
      async function addTodoList() {
        try {
          await TodoService.addTodoList(content, false);
          props.onRefresh();
        } catch (error) {
          console.log(error);
        }
      }
      addTodoList();
      setContent("");
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onAddToDo();
    }
  };

  const onChange = (e) => {
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
