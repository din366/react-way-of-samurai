import React from "react";
import styles from './Dialogs.module.css';
import {DialogsList} from "./DialogsList/DialogsList";
import {MessagesList} from "./MessagesList/MessagesList";

const Dialogs = ({state, dispatch}) => {
  return (
    <div className={styles.dialogs} data-id='23'>
      <DialogsList dialogsList={state.dialogsList} />
      <MessagesList dialogsMessages={state.dialogsMessages} dispatch={dispatch}/>
    </div>
  );
};

export default Dialogs;