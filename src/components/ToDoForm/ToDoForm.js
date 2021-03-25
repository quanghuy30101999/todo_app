import React, { useState } from "react";
const ToDoForm = (props) => {
  const { todos } = props;
  const id = todos[todos.length - 1].id + 1;
  const [message, setMessage] = useState("");
  const [content, setContent] = useState("");
  const onAddToDo = () => {
    if (content.length === 0) {
      setMessage("This field is required ");
    } else {
      props.addTodo({ id: id, content: content, completed: false });
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
