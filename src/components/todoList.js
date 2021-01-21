import React from 'react';
import Todo from './todo'

const TodoList = ({ todos, setTodos }) => {

    // console.log(todos)
    return (
        <div>
            <ul>
                {/* <Todo /> */}
                {todos.map((todo) => (
                    <Todo 
                    key={todo.id} text={todo.text} todo={todo }
                    setTodos ={setTodos} todos={todos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;