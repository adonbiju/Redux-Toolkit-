import React, { useState } from 'react';
import { deleteTodo,updateTodo} from '../state'
import { useDispatch } from 'react-redux';
import '../App.css'

export default function Todo(props) {
    const { todo } = props;
    const dispatch = useDispatch();

    const [isEdit, setIsEdit] = useState(false);
    const [editValue, setEditValue] = useState(todo.text);

    const saveTodo = (e) => {
      e.preventDefault();
      const payload = {
        id: todo.id,
        text: editValue,
      };
      dispatch(updateTodo(payload));
      cancelEdit();
    };

    const cancelEdit = () => {
      setIsEdit(false);
    };
    return isEdit ?(

      <div>      
      <form onSubmit={saveTodo} className='AddToDoinputFormEdit'>
      <input className='AddToDoinputEdit'
        type='text'
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
      />
      <button className='save' type='submit'>Save</button>
      <button className='cancel' onClick={cancelEdit}>Cancel</button>
    </form>
    </div>

    )
    :(
        <>
        <div className='todo'>
          <div className='left'>
            <span>{todo.text}</span>
          </div>
          
          <div className='right'>
              <button className='edit' onClick={() => setIsEdit(!isEdit)}>Edit</button>
              <button className='delete' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </div>
         </div>
        </>
      );
}