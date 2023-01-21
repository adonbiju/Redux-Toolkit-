
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../state';
import '../App.css'

export default function AddTodo() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
  
    const addTodoHandler = (event) => {
      event.preventDefault();
      dispatch(addTodo(text));
      setText('');
    };
  
    return (
      <form className="AddToDoinputForm" onSubmit={addTodoHandler}>
        <input className='AddToDoinput'
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='AddToDoButton'>Add ToDo</button>
      </form>
    );
  }