import React from 'react';
import Add from './images/add.png'

const Form = ({ setInputText, todos, setTodos, inputText }) => {

    const inputTextHandler = (e) => {
        let x = e.target.value;
        setInputText(x)
    };

    const submitTodoHandler = (e) => {
        e.preventDefault()
        
        if (inputText !== "") {
            setTodos([
                ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
            ])
            setInputText("");
        }
    };

    return (
        <form>
            <input className='input' value={inputText} onChange={inputTextHandler} placeholder='add a task'/>
            <button className={inputText === "" ? 'inputBtn inputBtnNoneActive' : 'inputBtn inputBtnActive'} onClick={submitTodoHandler} type='submit'><img src={Add} width='20px' height='20px'/></button>
        </form>
    )
}

export default Form