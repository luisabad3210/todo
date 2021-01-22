import React, { useState } from 'react';
import './App.css';
// import logo from './logo.svg';
import Form from './components/form'
import TodoList from './components/todoList'

import Add from './components/images/add.png'
import Cancel from './components/images/cancel.jpg'


function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [showInput, setShowInput] = useState(false)
  
  let currentDate = Date().toLocaleString().slice(0, 10)

  const showInputHandler = (event) => {
    // event.preventDefault()
    setShowInput(!showInput)

    console.log(showInput)
  }

  return (
    <div className='App'>
      <div className='todo'>
        <div>Todo</div>
        <h1>{currentDate}</h1>
        <div>no tasks</div>
        <hr></hr>
        {showInput ? <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/> : null }
        <button className='add' onClick={showInputHandler}>{showInput ? <img src={Cancel} width='23px' height='23px' /> : <img src={Add} width='25px' height='25px'/>}</button>
        <TodoList setTodos ={setTodos} todos={todos}/>
      </div>
    </div>
  );
}

export default App;