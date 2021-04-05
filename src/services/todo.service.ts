import axios from 'axios';
import { Todo } from '../models/todo.model';

const API_URL = 'http://localhost:5102/api/v1/';

const getTodoList = async (): Promise<Todo[]> => {
  return await axios.get(API_URL + 'todos').then((response) => response.data);
};

const addTodoList = async (
  content: string,
  completed: boolean
): Promise<Todo> => {
  return await axios.post(API_URL + 'todos', { content, completed });
};

const deleteTodoList = async (id: number): Promise<Todo> => {
  return await axios.delete(`${API_URL}todos/${id}`);
};

const updateTodoList = async (
  id: number,
  completed: boolean
): Promise<Todo> => {
  return await axios
    .patch(`${API_URL}todos/${id}`, { completed })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    });
};

export { getTodoList, addTodoList, deleteTodoList, updateTodoList };
