import axios from "axios";

const API_URL = "http://localhost:5102/api/v1/";

const getTodoList = () => {
  return axios.get(API_URL + "todos").then((response) => {
    if (response.data) {
      return response.data;
    }
  });
};

const addTodoList = (content: string, completed: boolean) => {
  return axios
    .post(API_URL + "todos", { content: content, completed: completed })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    });
};

const deleteTodoList = (id: number) => {
  return axios.delete(`${API_URL}todos/${id}`).then((response) => {
    if (response.data) {
      return response.data;
    }
  });
};

const updateTodoList = async (id: number, completed: boolean) => {
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
