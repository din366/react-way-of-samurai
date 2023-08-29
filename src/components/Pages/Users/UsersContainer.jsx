import React from "react";
import {connect} from "react-redux";
import {
  getUsers,
  follow,
  unfollow,
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
                  isAuth={this.props.isAuth}
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
  }
}

export default compose(
  connect(mapStateToProps, { // Вместо mapDispatchToProps в connect отдаем объект с action creators
  follow,
  unfollow,
  getUsers,
}),
)(UsersApiComponent);