import React from "react";
import Dialogs from "./Dialogs";
import {
  addChatMessageActionCreator,
  getFriendsList,
} from "../../../state/dialogsReducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";

class DialogsApiComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFriendsList();
  }

  render () {
    return <Dialogs dialogsMessages={this.props.dialogsMessages}
                    dialogsList={this.props.dialogsList}
                    addChatMessage={this.props.addChatMessageActionCreator}
                    isAuth={this.props.isAuth}/>
  }
}

const mapStateToProps = (state) => {
  return {
    dialogsMessages: state.dialogsPage.dialogsMessages,
    dialogsList: state.dialogsPage.dialogsList,
    isAuth: state.auth.isAuth,
  }
}


const DialogsContainer = compose( // for HOC components (create conveyor)
  connect(mapStateToProps, {
    addChatMessageActionCreator,
    getFriendsList
  }),
  withAuthRedirect,
)(DialogsApiComponent);

export default DialogsContainer;