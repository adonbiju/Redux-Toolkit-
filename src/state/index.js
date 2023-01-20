import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        text: action.payload,
      };
      return [...state, todo];
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    }
  },
});

export const { addTodo,deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;