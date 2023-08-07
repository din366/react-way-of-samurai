import Dialogs from "./Dialogs";
import {addChatMessageActionCreator, updateChatNewMessageActionCreator} from "../../../state/dialogsReducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";

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

const DialogsContainer = compose( // for HOC components (create conveyor)
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);

export default DialogsContainer;