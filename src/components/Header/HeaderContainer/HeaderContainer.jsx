import React from "react";
import Header from "../Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, toggleAuthIsFetching} from "../../../state/authReducer";
import {authApi} from "../../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleAuthIsFetching(true);
    authApi.getLoggedInfoUser()
      .then(data => {
        if (data.resultCode === 0) {
          const {id, login, email} = data.data;

          authApi.getLoggedImageUser(id)
            .then(imageUrl => {
              this.props.setAuthUserData(id, email, login, imageUrl, true);
              this.props.toggleAuthIsFetching(false);
            });
        };
      });
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

export default connect(mapStateToProps, {setAuthUserData, toggleAuthIsFetching})(HeaderContainer);