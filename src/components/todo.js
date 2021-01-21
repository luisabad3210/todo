import React from 'react';


const Todo = ({ text, todo, todos, setTodos }) => {

    const deletleHandler = () => {
        setTodos(todos.filter(i => i.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }
    return (
        <div className='item'>
            {text}
            <button onClick={completeHandler}>done</button>
            <button onClick={deletleHandler}>trash</button>
        </div>
    )
}

export default Todo;