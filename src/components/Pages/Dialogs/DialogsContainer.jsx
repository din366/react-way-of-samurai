import React from "react";
import Dialogs from "./Dialogs";
import {addChatMessageActionCreator, updateChatNewMessageActionCreator} from "../../../state/dialogsReducer";

const DialogsContainer = ({store}) => {
  const state = store.getState();

  const addChatMessage = () => {
    store.dispatch(addChatMessageActionCreator());
  }

  const onChangeMessageArea = (text) => {
    store.dispatch(updateChatNewMessageActionCreator(text))
  }

  return <Dialogs dialogsMessages={state.dialogsPage.dialogsMessages}
                  dialogsList={state.dialogsPage.dialogsList}
                  addChatMessage={addChatMessage}
                  onChangeMessageArea={onChangeMessageArea}/>;
};

export default DialogsContainer;