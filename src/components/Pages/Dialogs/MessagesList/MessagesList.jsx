import React from "react";
import styles from './MessagesList.module.css';
import {SingleMessage} from "./SingleMessage/SingleMessage";

export const MessagesList = () => {
  return (
    <div className={styles.messagesList}>
      <SingleMessage />
      <SingleMessage />
    </div>
  );
};