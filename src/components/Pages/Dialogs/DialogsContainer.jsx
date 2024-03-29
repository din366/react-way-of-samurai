import React from "react";
import Dialogs from "./Dialogs";
import {
  addChatMessageActionCreator, getAllDialogs,
  getFriendsList, getNewPortionOldMessages, sendNewMessage, setCurrentChatUserId, startChatting,
} from "../../../state/dialogsReducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getActiveChatInfoReselect, getDialogsUsersReselect} from "../../../state/selectors/dialogsSelectors";

class DialogsApiComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllDialogs();
  }

  render () {
    return <Dialogs dialogsMessages={this.props.dialogsMessages}
                    dialogsList={this.props.dialogsList}
                    currentChatUserId={this.props.currentChatUserId}
                    addChatMessage={this.props.addChatMessageActionCreator}
                    isAuth={this.props.isAuth}
                    setCurrentChatUserId={this.props.setCurrentChatUserId}
                    startChatting={this.props.startChatting}
                    activeChatUserInfo={this.props.activeChatUserInfo}
                    sendMessage={this.props.sendNewMessage}
                    loggedUserPhoto={this.props.loggedUserPhoto}
                    getNewPortionOldMessages={this.props.getNewPortionOldMessages}
                    currentMessagePage={this.props.currentMessagePage}/>
  }
}

const mapStateToProps = (state) => {
  return {
    dialogsMessages: state.dialogsPage.dialogsMessages,
    dialogsList: getDialogsUsersReselect(state),
    isAuth: state.auth.isAuth,
    loggedUserPhoto: state.auth.smallLogo,
    currentChatUserId: state.dialogsPage.currentChatUserId,
    activeChatUserInfo: getActiveChatInfoReselect(state),
    currentMessagePage: state.dialogsPage.currentPage,
  }
}


const DialogsContainer = compose( // for HOC components (create conveyor)
  connect(mapStateToProps, {
    addChatMessageActionCreator,
    getFriendsList,
    sendNewMessage,
    getAllDialogs,
    setCurrentChatUserId,
    startChatting,
    getNewPortionOldMessages
  }),
  withAuthRedirect,
)(DialogsApiComponent);

export default DialogsContainer;