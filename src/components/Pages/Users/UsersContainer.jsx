import React from "react";
import {connect} from "react-redux";
import {
  getUsers,
  follow,
  unfollow,
} from "../../../state/usersReducer";
import Users from "./Users/Users";
import Preloader from "../../Other/Preloader/Preloader";

class UsersApiComponent extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
                  follow={this.props.follow}
                  toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                  followingInProgress={this.props.isFollowingProgress}
    />
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
    isFollowingProgress: state.usersPage.followingInProgress,
  }
}

export default connect(mapStateToProps, { // Вместо mapDispatchToProps в connect отдаем объект с action creators
  follow,
  unfollow,
  getUsers,
})(UsersApiComponent);