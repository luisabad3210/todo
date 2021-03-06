import React from 'react';
import Trash from './images/trash.png'
import Done from './images/done.png'


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
            <div className={todo.completed ? 'completed' : ''}>{text}</div>
            <div className='todoBtn'>
                <button  className={todo.completed ? "doneNoneActive" : "doneActive"} onClick={completeHandler} ><img src={Done} width='15px' height='15px' alt='' title=''/></button>
                <button className ='trash' onClick={deletleHandler} ><img src={Trash} width='15px' height='15px' alt='' title=''/></button>
            </div>
        </div>
    )
}

export default Todo;