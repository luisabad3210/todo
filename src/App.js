import React, { useState } from 'react';
import './App.css';
// import logo from './logo.svg';
import Form from './components/form'
import TodoList from './components/todoList'

// import Add from 

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  
  let currentDate = Date().toLocaleString().slice(0, 10)

  return (
    <div className='App'>
      <div className='todo'>
        <h1>{currentDate}</h1>
        <div>no tasks</div>
        <hr></hr>
        <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
        <button className='add'></button>
        <TodoList setTodos ={setTodos} todos={todos}/>
      </div>
    </div>
  );
}

export default App;