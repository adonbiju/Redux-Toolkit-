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
    }
  },
});

export const { addTodo} = todosSlice.actions;

export default todosSlice.reducer;