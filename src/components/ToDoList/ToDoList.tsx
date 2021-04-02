import ToDoDetail from "../ToDoList/ToDoDetail";
import { ITodo } from '../../model/todo.module'

interface IProps {
  todos: ITodo[]
}
function ToDoList(props: IProps): JSX.Element {
  const { todos } = props;

  return <>{
    todos.map((todo, index) => <ToDoDetail todo={todo} key={index} />)
  }</>
}

export default ToDoList;
