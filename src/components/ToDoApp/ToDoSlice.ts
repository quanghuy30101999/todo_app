import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../models/todo.model';
const todo = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    showTodo: (state, { payload }: PayloadAction<Todo[]>) => {
      state = payload;
      return state;
    },
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.push(payload);
    },
    updateTodo: (state, { payload }: PayloadAction<Todo>) => {
      const index = state.findIndex((item: Todo) => item.id === payload.id);
      if (index >= 0) {
        state[index] = payload;
      }
    },
    deleteTodo: (state, { payload }: PayloadAction<number>) => {
      return state.filter((item: Todo) => item.id !== payload);
    },
  },
});

const { reducer, actions } = todo;
export const { showTodo, addTodo, updateTodo, deleteTodo } = actions;

export default reducer;
