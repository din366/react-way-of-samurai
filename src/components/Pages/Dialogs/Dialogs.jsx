import React from "react";
import styles from './Dialogs.module.css';
import {DialogsList} from "./DialogsList/DialogsList";
import {MessagesList} from "./MessagesList/MessagesList";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <DialogsList />
      <MessagesList />
    </div>
  );
};

export default Dialogs;