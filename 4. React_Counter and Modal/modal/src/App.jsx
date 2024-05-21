import { useState } from 'react'
import './App.css'
import Modal from './components/Modal.jsx'

function App(props) {
  const [modalIsOpen, setModalState] = useState(false);

  function openModal(){ 
    setModalState(true);
    console.log("모달이 켜짐");
  }

  function closeModal() {
    setModalState(false);
    console.log("모달이 꺼짐");
  }

  return (
    <>
      <div>
        <h1 className="title">안녕하세요!</h1>
        <div className="contents">내용내용내용</div>
        <button className="button" onClick={openModal}>버튼 열기</button>
      </div>
      {modalIsOpen && <Modal/>}
      {modalIsOpen && <Modal onClose = {closeModal} />}
    </>
  )
}

export default App
