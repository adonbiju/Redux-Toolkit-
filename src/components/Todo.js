import { deleteTodo} from '../state'
import { useDispatch } from 'react-redux';

export default function Todo(props) {
    const { todo } = props;
    const dispatch = useDispatch();
    return (
        <div>
         <span>{todo.text}</span>
         <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
      );
}