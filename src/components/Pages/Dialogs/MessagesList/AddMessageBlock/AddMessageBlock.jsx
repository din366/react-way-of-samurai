import React from "react";
import styles from './AddMessageBlock.module.css';
import {addChatMessageActionCreator, updateChatNewMessageActionCreator} from "../../../../../state/dialogsReducer";



const AddMessageBlock = ({addChatMessage, onChangeMessageArea}) => {
  console.log(onChangeMessageArea)
  const addMessage = () => {
    addChatMessage();
  }

  const changeAreaText = ({target}) => {
    let text = target.value;
    onChangeMessageArea(text);
  }

  return (
    <div className={styles.addMessageBlockWrapper}>
      <textarea name="" id="" cols="30" rows="10" className={styles.AddMessageBlockTextarea} placeholder='Add your message...' onChange={changeAreaText}></textarea>
      <button className={styles.addMessageBlockSendButton} onClick={addMessage}>Send</button>
    </div>
  );
};

export default AddMessageBlock;