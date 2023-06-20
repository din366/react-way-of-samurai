import React from "react";
import styles from './DialogsList.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";

export const DialogsList = () => {
  return (
    <div className={styles.dialogsList}>
      <DialogsItem to='1'/>
      <DialogsItem to='2'/>
      <DialogsItem to='3'/>
    </div>
  );
};