import { useState } from 'react';
import './styles.css';

function App() {
  const [count, setCount] = useState(0); //0을 카운터의 초기값으로


  function increase() {
    setCount(count => count+1);
    console.log("increase가 클릭됨");
  }

  function decrease() {
    setCount(count => count-1);
    console.log("decrease가 클릭됨");
  }

  
  return (
    <>
      <div className="showNumber">
        <h1 id="number">{count}</h1>
      </div>
      <div className="buttons">
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    </>
  )
}

export default App;