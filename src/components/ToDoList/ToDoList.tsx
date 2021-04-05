import ToDoDetail from '../ToDoList/ToDoDetail';
import { Todo } from '../../models/todo.model';

interface IProps {
  todos: Todo[];
}
function ToDoList(props: IProps): JSX.Element {
  const { todos } = props;

  return (
    <>
      {todos.map((todo, index) => (
        <ToDoDetail todo={todo} key={index} />
      ))}
    </>
  );
}

export default ToDoList;
