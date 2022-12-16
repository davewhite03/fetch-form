import React from 'react';
import styles from './Modal.module.css';
const Modal = () => {
  const refreshHandler = () => {
    window.location.reload(false);
  };
  return (
    <div id="modal">
      <h1>Thank You For Your Submission!</h1>
      <button onClick={refreshHandler}>Return</button>
    </div>
  );
};

export default Modal;
