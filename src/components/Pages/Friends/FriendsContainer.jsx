import React from "react";
import {connect} from "react-redux";
import {
  getUsers,
  follow,
  unfollow, setCurrentPage,
} from "../../../state/usersReducer";
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
import Friends from "./Friends/Friends";

class FriendsApiComponent extends React.Component{
  constructor(props) {
    super(props);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, 10, true);
  }

  componentDidMount() {
    this.props.getUsers(1, 10, true);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Friends totalUsersCount={this.props.totalUsersCount}
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
  }
}

export default compose(
  connect(mapStateToProps, { // Вместо mapDispatchToProps в connect отдаем объект с action creators
    follow,
    unfollow,
    getUsers,
    setCurrentPage,
  }),
)(FriendsApiComponent);