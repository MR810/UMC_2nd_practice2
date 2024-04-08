import React from 'react';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalContent">
          <div className="modalTitle">안녕하세요</div>
          <p>모달 내용은 어쩌고 저쩌고..</p>
          <div className="closeModal">
            <button onClick={onClose}>닫기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
