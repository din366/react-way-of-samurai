import React from "react";
import {connect} from "react-redux";
import {
  getUsers,
  follow,
  unfollow,
  toggleShowOnlyFriends, setCurrentPage,
} from "../../../state/usersReducer";
import Users from "./Users/Users";
import Preloader from "../../Other/Preloader/Preloader";
import {compose} from "redux";
import {
  getCurrentPageReselect,
  getPageSizeReselect,
  getTotalUsersCountReselect,
  getUsersPageReselect,
  isFetchingReselect,
  isFollowingProgressReselect,
} from "../../../state/selectors/usersSelectors";

class UsersApiComponent extends React.Component{
  constructor(props) {
    super(props);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize, this.props.showOnlyFriends);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
    <Users totalUsersCount={this.props.totalUsersCount}
           pageSize={this.props.pageSize}
           users={this.props.users}
           onPageChanged={this.onPageChanged}
           currentPage={this.props.currentPage}
           unfollow={this.props.unfollow}
           follow={this.props.follow}
           toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
           followingInProgress={this.props.isFollowingProgress}
           isAuth={this.props.isAuth}
           loggedUserId={this.props.loggedUserId}
           toggleShowOnlyFriends={this.props.toggleShowOnlyFriends}
           showOnlyFriends = {this.props.onlyFriends}
           getUsers = {this.props.getUsers}
           setCurrentPage={this.props.setCurrentPage}
    />
    </>
  }
}


/* for UsersApiComponent component store and dispatches (connect UsersApiComponent)*/
const mapStateToProps = (state) => {
  return {
    users: getUsersPageReselect(state),
    pageSize: getPageSizeReselect(state),
    totalUsersCount: getTotalUsersCountReselect(state),
    currentPage: getCurrentPageReselect(state),
    isFetching: isFetchingReselect(state),
    isFollowingProgress: isFollowingProgressReselect(state),
    isAuth: state.auth.isAuth,
    loggedUserId: state.auth.userId,
    onlyFriends: state.usersPage.showOnlyFriends,
  }
}

export default compose(
  connect(mapStateToProps, { // Вместо mapDispatchToProps в connect отдаем объект с action creators
  follow,
  unfollow,
  getUsers,
  toggleShowOnlyFriends,
  setCurrentPage,
}),
)(UsersApiComponent);