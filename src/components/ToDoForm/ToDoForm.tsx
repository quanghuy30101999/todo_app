import { useDispatch } from "react-redux";
import TodoService from "../../services/todo.service";
import { addTodo } from "../ToDoApp/todoSlice";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import React from "react";

interface IFormInputs {
  content: string;
}

export default function App() {
  const { register, errors, handleSubmit, reset } = useForm<IFormInputs>({
    criteriaMode: "all"
  });

  const dispatch = useDispatch();

  const onSubmit = (data: IFormInputs) => {
    TodoService.addTodoList(data.content, false).then(todo => {
      dispatch(addTodo(todo))
      reset()
    })
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className="add-items d-flex">
        <input
          name="content"
          className="form-control todo-list-input"
          placeholder="What do you need to do today?"
          ref={register({
            required: "This input is required.",
          })}
        />
        <button type="submit" className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button>
      </form>
      <ErrorMessage
        errors={errors}
        name="content"
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
              <p key={type} className="alert alert-danger" role="alert"
              >{message} </p>
            ))
            : null;
        }}
      />
    </React.Fragment>
  );
}
