import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
       <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
    <AddTodo/>
    <Todos/>
    </div>
  );
}

export default App;
