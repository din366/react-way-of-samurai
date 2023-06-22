import React from "react";
import styles from './DialogsList.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";

export const DialogsList = (props) => {
  return (
    <div className={styles.dialogsList}>
      {props.dialogsList.map(item => <DialogsItem to={item.id} name={item.name}/>)}
    </div>
  );
};