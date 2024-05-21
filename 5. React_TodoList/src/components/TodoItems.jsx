import { useState } from 'react';
import React from "react"

function TodoItems(props){

    return (
        <ul className="list1">
            {props.todos.map(todo => (
                <li key={todo.id}>
                    {todo.content}
                    <button className="doneBtn" onClick={() => props.moveTodoHandler(todo.id)}>완료</button>
                </li>))}
        </ul>
        )
    
}
export default TodoItems