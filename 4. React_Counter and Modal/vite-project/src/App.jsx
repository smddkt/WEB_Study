import { useState } from "react"
import "./style.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title: newItem, completed: false},
            ]
    })

    setNewItem("")
  }
  //setTodos function으로 지정해야 하는 이유는 기존에 있던 값들에 새로운 값을 쌓아야 하기 때문임. 
  //onChange={e => setNewItem(e.target.value)}이런 식으로 받으면 새로운 값 입력할 때마다 기존 값이 사라짐.
  
function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
    })
  })
}

function deleteTodo(id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}

  return (
    <>
  <form onSubmit={handleSubmit} className = "new-item-form">
    <div className = "form-row">
      <label htmlFor="item">New Item</label>
      <input 
        value = {newItem}
        onChange={e => setNewItem(e.target.value)}
        type = "text" 
        id = "item"
        />
    </div>
    <button className = "btn">등록</button>
  </form>
  <h1 className = "header">Todo List</h1>
  <ul className="List">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
      return (
      <li key={todo.id}>
      <label>
      <input type="checkbox" checked={todo.completed}
      onChange={e => toggleTodo(todo.id, e.target.checked)}/>
        {todo.title}
      </label>
      <button onClick={() => deleteTodo(todo.id)} 
      className = "btn btn-danger"
      >
        Delete</button>
    </li>)
    })}
  </ul>
  </>
)
}