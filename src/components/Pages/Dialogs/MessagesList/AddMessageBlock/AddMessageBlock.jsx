import React from "react";
import styles from './AddMessageBlock.module.css';
import {addChatMessageActionCreator, updateChatNewMessageActionCreator} from "../../../../../state/state";



const AddMessageBlock = ({dispatch}) => {

  const textArea = React.createRef()

  const addChatMessage = () => {
    dispatch(addChatMessageActionCreator());
  }

  const onChangeMessageArea = () => {
    let text = textArea.current.value;
    console.log(text);
    dispatch(updateChatNewMessageActionCreator(text))
  }

  return (
    <div className={styles.addMessageBlockWrapper}>
      <textarea name="" id="" cols="30" rows="10" className={styles.AddMessageBlockTextarea} placeholder='Add your message...' onChange={onChangeMessageArea} ref={textArea}></textarea>
      <button className={styles.addMessageBlockSendButton} onClick={addChatMessage}>Send</button>
    </div>
  );
};

export default AddMessageBlock;