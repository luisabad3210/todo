import React from 'react';
import Todo from './todo'

const TodoList = ({ todos, setTodos }) => {
    return (
        <div>
            {todos.map((todo) => (
                <Todo 
                key={todo.id} text={todo.text} todo={todo }
                setTodos ={setTodos} todos={todos}
                />
            ))}
        </div>
    )
}

export default TodoList;