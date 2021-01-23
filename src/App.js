import React, { useState } from 'react';
import './App.css';
import Form from './components/form'
import TodoList from './components/todoList'
import Add from './components/images/add.png'
import Cancel from './components/images/cancel.jpg'


function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [showInput, setShowInput] = useState(false);
  
  let currentDate = Date().toLocaleString().slice(0, 10)
  let count = todos.length

  const showInputHandler = () => {
    setShowInput(!showInput)
  }

  const numberOfTask = () => {
    if (count === 1) {
      return count + ' ' + 'task'
    } else {
      return count + ' ' + 'tasks'
    }
  }

  const status = () => {
    if (count > 5) {
      return 'scroll to view full list'
    } else if (count === 0) {
      return 'Add a task!'
    }
  }

  return (
    <div className='App'>
      <div className='todo'>
        {/* <div>Todo</div> */}
        <h1>{currentDate}</h1>
        <div>{numberOfTask()}</div>
        <hr></hr>
        {showInput ? <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/> : null }
        <button className='add' onClick={showInputHandler}>{showInput ? <img src={Cancel} width='23px' height='23px' /> : <img src={Add} width='25px' height='25px'/>}</button>
        
        <div className='todoListContainer'>
          <TodoList setTodos ={setTodos} todos={todos}/>
        </div>
        {status()}
      </div>
    </div>
  );
}

export default App;