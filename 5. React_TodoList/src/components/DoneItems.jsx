import { useState } from 'react';
import React from "react"

function DoneItems(props){

    return (
      <ul className="list2">
        {props.doneTodo.map((todo) => (
            <li key = {todo.id}>
                {todo.content}
                <button className="deleteBtn" onClick={() => props.deleteTodoHandler(todo.id)}>삭제</button>
            </li>
        ))}
      </ul>
    )
    
}

export default DoneItems