import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAc, unFollowAC} from "../../../state/usersReducer";
import UsersClass from "./UsersClass";

const mapStateToProps = (state) => {
  return {
    users:state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUserCountAC(totalUsersCount));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);