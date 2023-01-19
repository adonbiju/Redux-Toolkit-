import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../state'
export default configureStore({
  reducer: {
    todos: todosReducer
  },
});