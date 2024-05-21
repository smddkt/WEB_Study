import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import TodoItems from "./components/TodoItems"
import DoneItems from "./components/DoneItems"

function App() {

  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);

  const [newInput, setNewInput] = useState("");
  const [doneTodo, setDoneTodo] = useState([]);
  const [moved, setMoved] = useState([]);



  function addTodoHandler(e) {
    if (e.key ==="Enter"){
    e.preventDefault()

    setTodos(currentTodos => [
        ...currentTodos, 
        {id:uuidv4() , content: newInput},
            ]
    )

    setNewInput("")
  }}

  function moveTodoHandler(movedtodo) {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== movedtodo));
    setMoved(currentMoved => [...currentMoved, todos.find(todo => todo.id === movedtodo)]);
    setDoneTodo(currentDoneTodos => [
      ...currentDoneTodos, {id: movedtodo, content: todos.find(todo => todo.id === movedtodo).content, isDone: true}
    ]);
  };

  function deleteTodoHandler(deletetodo){
    setDoneTodo(currentDoneTodos => currentDoneTodos.filter(todo => todo.id != deletetodo));
  }
  
  

  return (
    <>
    <form className="new-input" onKeyDown = {addTodoHandler}>
    <h1>UMC Study Plan</h1>
    <input
        value = {newInput}
        onChange={e => setNewInput(e.target.value)}
        type = "text" 
        placeholder='UMC 스터디 계획을 작성해보세요!'
        />
        </form>
        <div className = "listBoard">
            <h4>해야할 일</h4>
            <h4>해낸 일</h4>
            </div>
    <div className="container">
    <TodoItems todos={todos} moveTodoHandler={moveTodoHandler}/>
    <DoneItems doneTodo = {doneTodo} deleteTodoHandler={deleteTodoHandler}/>
    </div>
    </>
    )
}

export default App




