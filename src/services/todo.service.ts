import axios from "axios";
import { ITodo } from "../types/todo";

const API_URL = "http://localhost:5102/api/v1/";

const getTodoList = (): Promise<ITodo[]> => {
  return axios.get(API_URL + "todos").then((response) => {
    if (response.data) {
      return response.data;
    }
  });
};

const addTodoList = (content: string, completed: boolean): Promise<ITodo> => {
  return axios
    .post(API_URL + "todos", { content, completed })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    });
};

const deleteTodoList = (id: number): Promise<ITodo> => {
  return axios.delete(`${API_URL}todos/${id}`).then((response) => {
    if (response.data) {
      return response.data;
    }
  });
};

const updateTodoList = (id: number, completed: boolean): Promise<ITodo> => {
  return axios
    .patch(`${API_URL}todos/${id}`, { completed })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    });
};

export default {
  getTodoList,
  addTodoList,
  deleteTodoList,
  updateTodoList,
};
