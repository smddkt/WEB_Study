import { useState } from 'react'
import './App.css'

function App() {
  const [newItem, setNewItem] = useState("UMC 스터디 계획을 작성해보세요!")
  //newItem의 값을 바꾸는 방법은 setNewItem함수를 호출해서 함수 안의 변수를 바꾸는 방법 밖에 없다.
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    if(e.key ==="Enter"){
    e.preventDefault()
    setTodos(currentTodos => {
      return [
        ...currentTodos, //지금 상태의 currentTodos의 목록에다가 {}안의 값을 추가함.
        {id: crypto.randomUUID(), title: newItem, completed: false}
            ]
    })
    setNewItem("")
  }}
        /*currentTodos라는 변수를 새로 만들어서 그걸 인자로 받는 함수로 만드는 이유.
          :이렇게 하면 ㅇreturn[] 안에 있는 모든 게 currentTodos의 값으로 새롭게 업데이트됨.--> 추가한 내역을 계속 저장하고 싶을 때
          계속 업데이트되는 현재 상태를 써야 할 때는 무조건 state함수 안에 (그냥 값이 아니라,) 새로운 함수를 전달해야 함. 
          setTodos([
          ...todos,
          { id:crypto.randomUUID(), title: newItem, completed: false },
          ])} 이렇게 하면 항상 "...todos"가 공백으로 들어가서 이전 내역이 사라짐.
        */

  function emptyBox(){
    setNewItem("")
  }

  return (
    <>
    <form className="new-input" onKeyDown = {handleSubmit}>
      <h1> UMC Study Plan</h1>
      <input 
        value = {newItem}
        onChange={e => setNewItem(e.target.value)}
        onFocus = {emptyBox}
        //e.target.value를 setNewItem에 전달해서 newItem의 값을 바꿈.
        type = "text" 
        id = "input"
        />
      <div className="container">
        <TodoList todos={todos}/>
        <CompletedList/>
      </div>
      
      
    </form>
    

        
    </>
  )
}



function TodoList({todos, setTodos}){

  function moveItems(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
}

	return(
		<div>
		<h3>해야 할 일</h3>
    <ul className="list1">
    {todos.map(todo =>{
      return(
        <li key={todo.id}>
        {todo.title}
        <button onClick={() => moveItems(todo.id)}>완료</button>
        </li>
    );})}
      </ul>
	  </div>
)}

function CompletedList(){
	return(
		<div>
		<h3>해낸 일</h3>
        <ul className="list2">
            <li>
              item2
            </li>
            <button>삭제</button>
        </ul>
	</div>
)}

export default App



