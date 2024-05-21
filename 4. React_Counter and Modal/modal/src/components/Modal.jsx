import './Modal.css'

function Modal(props) {
  
  function closeModalHandler() {
    props.onClose();
  }

  return (
    <div className = "mBackground">
      <div className = "Modal">
        <div className="mTitle">안녕하세요</div>
        <div className="mContents">모달 내용은 어쩌고 저쩌고..</div>
        <button className="mButton" onClick={closeModalHandler}>닫기</button>
      </div>
      </div>
  );
}

export default Modal;