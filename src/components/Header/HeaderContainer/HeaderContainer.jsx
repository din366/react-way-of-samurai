import React from "react";
import Header from "../Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../../state/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    /*this.props.isFetching = true;*/
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true,
    })
      .then(res => {
        if (res.data.resultCode === 0) {
          const {id, login, email} = res.data.data;
          this.props.setAuthUserData(id, email, login, true);
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
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);