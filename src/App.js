import React, { useState } from 'react';
import './App.css';
// import logo from './logo.svg';
import Form from './components/form'
import TodoList from './components/todoList'

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>Todo List</h1>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList setTodos ={setTodos} todos={todos}/>
    </div>
  );
}

export default App;