import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo'
import '../App.css'
export default function Todos() {
  const todos = useSelector((state) => state.todos);
  // todos comes from the reducer attribute name 
  // in configureStore
  //"store/index.js"===>reducer name===>todos

  return (
    <div className='todos'>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
           <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
