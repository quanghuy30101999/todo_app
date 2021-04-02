import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from '../../types/todo'
const todo = createSlice({
  name: 'todos',
  initialState: [] as ITodo[],
  reducers: {
    showTodo: (state , { payload }: PayloadAction<ITodo[]>) => {
      return state = payload
    },
    addTodo: (state, { payload }: PayloadAction<ITodo>) => {
      state.push(payload)
    },
    updateTodo: (state, { payload }: PayloadAction<ITodo>) => {
      const index = state.findIndex((item: ITodo) => item.id === payload.id)
      const newTodo = payload
      if(index >=  0){
        state[index] = newTodo
      }
    },
    deleteTodo: (state, { payload }: PayloadAction<number>) => {
      return state.filter((item: ITodo) => item.id !== payload )
    }
  }
})

const { reducer , actions } = todo;
export const { showTodo, addTodo, updateTodo, deleteTodo } = actions;

export default reducer;