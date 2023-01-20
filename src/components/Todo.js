import React, { useState } from 'react';
import { deleteTodo,updateTodo} from '../state'
import { useDispatch } from 'react-redux';

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
      <form onSubmit={saveTodo}>
      <input
        type='text'
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
      />
      <button type='submit'>Save</button>
      <button onClick={cancelEdit}>Cancel</button>
    </form>
    )
    :(
        <>
         <span>{todo.text}</span>
         <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
         <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </>
      );
}