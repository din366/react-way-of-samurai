import React from "react";
import Dialogs from "./Dialogs";
import {addChatMessageActionCreator, updateChatNewMessageActionCreator} from "../../../state/dialogsReducer";
import {connect} from "react-redux";

/*
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
*/

const mapStateToProps = (state) => {
  return {
    dialogsMessages: state.dialogsPage.dialogsMessages,
    dialogsList: state.dialogsPage.dialogsList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChatMessage: () => {
      dispatch(addChatMessageActionCreator())
    },
    onChangeMessageArea: (text) => {
      dispatch(updateChatNewMessageActionCreator(text))
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;