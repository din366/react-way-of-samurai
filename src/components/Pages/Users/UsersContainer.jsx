import React from "react";
import {connect} from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUserCountAC,
  setUsersAc,
  toggleIsFetchingAC,
  unFollowAC
} from "../../../state/usersReducer";
import axios from "axios";
import Users from "./Users/Users";
import Preloader from "../../Other/Preloader/Preloader";

class UsersApiComponent extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.toggleIsFetching(true);
    this.props.setUsers([]);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
        this.props.toggleIsFetching(false);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    this.props.setUsers([]);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.toggleIsFetching(false);
      });
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
    <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  users={this.props.users}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}/>
    </>
  }
}


/* for UsersApiComponent component store and dispatches (connect UsersApiComponent)*/
const mapStateToProps = (state) => {
  return {
    users:state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);