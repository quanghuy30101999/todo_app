import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    showTodo: (state: any, action: any) => {
      return state = action.payload
    },
    addTodo: (state: any, action: any) => {
      state.push(action.payload)
    },
    updateTodo: (state: any, action: any) => {
      let index = state.findIndex((todo: any) => todo.id === action.payload.id)
      
      let newTodo = action.payload
      if(index >=  0){
        state[index] = newTodo
      }
    },
    deleteTodo: (state: any, action: any) => {
      return state.filter((todo: any) => todo.id !== action.payload )
    }
  }
})

const { reducer , actions } = todo;
export const { showTodo, addTodo, updateTodo, deleteTodo } = actions;

export default reducer;