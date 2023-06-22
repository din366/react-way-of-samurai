import React from "react";
import styles from './MessagesList.module.css';
import {SingleMessage} from "./SingleMessage/SingleMessage";
export const MessagesList = (props) => {
  return (
    <div className={styles.messagesList}>
      {props.dialogsMessages.map(item => <SingleMessage message={item.message} />)}
    </div>
  );
};