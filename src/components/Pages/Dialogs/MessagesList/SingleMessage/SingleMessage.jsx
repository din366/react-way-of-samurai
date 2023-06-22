import React from "react";
import styles from './SingleMessage.module.css';
import user from './user.png';

export const SingleMessage = (props) => {
  return (
    <div className={styles.message}>
      <img src={user} alt=""/>
      <span>{props.message}</span>
    </div>
  );
};