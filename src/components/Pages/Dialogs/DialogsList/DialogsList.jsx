import React from "react";
import styles from './DialogsList.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Link} from "react-router-dom";

export const DialogsList = (props) => {
  return (
    <div className={`${styles.dialogsList} ${props.showChatsMenu ? styles.dialogsListShow : ''}`}>
      {props.dialogsList.length !== 0 ?
        props.dialogsList.map(item => <DialogsItem key={item.id} to={item.id} name={item.userName} photo={item.photos.large} toggleChatsMenu={props.toggleChatsMenu}/>) :
        <div className={styles.noDialoguesWrapper}>
          <span className={styles.noDialogues}>no active dialogues</span>
          <span className={styles.noDialogues}><Link to={'/friends'}>write</Link> your first message</span>
        </div>}
    </div>
  );
};