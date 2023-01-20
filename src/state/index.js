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
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;

      const todo = state.find((todo) => todo.id === id);
      todo.text = text;
    }
  },
});

export const { addTodo,deleteTodo ,updateTodo} = todosSlice.actions;

export default todosSlice.reducer;