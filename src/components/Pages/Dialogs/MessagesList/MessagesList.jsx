import React from "react";
import styles from './MessagesList.module.css';
import {SingleMessage} from "./SingleMessage/SingleMessage";
import AddMessageBlock from "./AddMessageBlock/AddMessageBlock";
export const MessagesList = (props) => {
  return (
    <div className={styles.messagesList}>
      {props.dialogsMessages.map(item => <SingleMessage message={item.message} />)}
      <AddMessageBlock dispatch={props.dispatch}/>
    </div>
  );
};