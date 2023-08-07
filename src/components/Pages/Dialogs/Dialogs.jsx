import React from "react";
import styles from './Dialogs.module.css';
import {DialogsList} from "./DialogsList/DialogsList";
import {MessagesList} from "./MessagesList/MessagesList";
import {Navigate} from "react-router-dom";

const Dialogs = ({dialogsMessages, dialogsList, addChatMessage, onChangeMessageArea, isAuth}) => {

  if (isAuth === false) return <Navigate to={'/login'}/>

  return (
    <div className={styles.dialogs} data-id='23'>
      <DialogsList dialogsList={dialogsList} />
      <MessagesList dialogsMessages={dialogsMessages} addChatMessage={addChatMessage} onChangeMessageArea={onChangeMessageArea}/>
    </div>
  );
};

export default Dialogs;