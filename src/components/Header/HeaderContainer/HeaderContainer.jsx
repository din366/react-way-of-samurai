import React from "react";
import Header from "../Header";
import {connect} from "react-redux";
import {logout, requestAuth} from "../../../state/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.requestAuth();
  }

  render () {
    return <Header {...this.props}></Header>
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  userId: state.auth.userId,
  isFetching: state.auth.isFetching,
  smallLogo: state.auth.smallLogo,
});

export default connect(mapStateToProps, {requestAuth, logout})(HeaderContainer);