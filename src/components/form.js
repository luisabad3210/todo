import React from 'react';


const Form = ({ setInputText, todos, setTodos, inputText }) => {


    const inputTextHandler = (e) => {
        // console.log(e.target.value)
        setInputText(e.target.value)
    };

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        setInputText("");
    };

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler}/>
            <button onClick={submitTodoHandler} type='submit'>add</button>

            {/* <div>
                <select name='todos'>
                    <option value='all'>All</option>
                    <option value='complete'>Complete</option>
                    <option value='unconplete'>Unconplete</option>
                </select>
            </div> */}

        </form>
    )
}

export default Form