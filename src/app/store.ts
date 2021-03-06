import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/ToDoApp/ToDoSlice';

const rootReducer = {
  todos: todoReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
