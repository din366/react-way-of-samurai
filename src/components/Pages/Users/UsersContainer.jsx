import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAc, unFollowAC} from "../../../state/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users:state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAc(users));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);