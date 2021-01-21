import logo from './logo.svg';
import './App.css';

import Form from './components/form'
import TodoList from './components/todoList'

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;