import React from "react";
import styles from './Dialogs.module.css';
import {DialogsList} from "./DialogsList/DialogsList";
import {MessagesList} from "./MessagesList/MessagesList";

const Dialogs = ({state}) => {
  return (
    <div className={styles.dialogs}>
      <DialogsList dialogsList={state.dialogsList} />
      <MessagesList dialogsMessages={state.dialogsMessages}/>
    </div>
  );
};

export default Dialogs;