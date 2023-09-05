import React, {useEffect} from "react";
import styles from './DialogsList.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {getFriendsList} from "../../../../state/dialogsReducer";

export const DialogsList = (props) => {

  return (
    <div className={styles.dialogsList}>
      {props.dialogsList.map(item => <DialogsItem key={item.id} to={item.id} name={item.name} photo={item.photos.large}/>)}
    </div>
  );
};