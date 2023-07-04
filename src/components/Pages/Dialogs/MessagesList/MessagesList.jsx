import React from "react";
import styles from './MessagesList.module.css';
import {SingleMessage} from "./SingleMessage/SingleMessage";
import AddMessageBlock from "./AddMessageBlock/AddMessageBlock";
export const MessagesList = ({dialogsMessages, addChatMessage, onChangeMessageArea}) => {
  return (
    <div className={styles.messagesList}>
      {dialogsMessages.map(item => <SingleMessage message={item.message} />)}
      <AddMessageBlock addChatMessage={addChatMessage} onChangeMessageArea={onChangeMessageArea}/>
    </div>
  );
};