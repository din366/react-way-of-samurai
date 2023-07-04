import React from "react";
import styles from './Dialogs.module.css';
import {DialogsList} from "./DialogsList/DialogsList";
import {MessagesList} from "./MessagesList/MessagesList";

const Dialogs = ({dialogsMessages, dialogsList, addChatMessage, onChangeMessageArea}) => {
  return (
    <div className={styles.dialogs} data-id='23'>
      <DialogsList dialogsList={dialogsList} />
      <MessagesList dialogsMessages={dialogsMessages} addChatMessage={addChatMessage} onChangeMessageArea={onChangeMessageArea}/>
    </div>
  );
};

export default Dialogs;