import React from "react";
import styles from "./Friends.module.css";
import Paginator from "../../../Other/Paginator/Paginator";
import Friend from "./Friend/Friend";

const Friends = (props) => {

  return (
    <div className={styles.friendsMainWrapper}>
      <Paginator totalCount={props.totalUsersCount}
                 pageSize={10}
                 currentPage={props.currentPage}
                 onPageChanged={props.onPageChanged}/>



      <div className={styles.friendsBlockWrapper}>
        {props.users.map(user =>
          <Friend key={user.id} user={user} followingInProgress={props.followingInProgress} unfollow={props.unfollow}
                follow={props.follow} isAuth={props.isAuth} loggedUserId={props.loggedUserId} onPageChanged={props.onPageChanged}/>
        )}
      </div>

      <Paginator totalCount={props.totalUsersCount}
                 pageSize={10}
                 currentPage={props.currentPage}
                 onPageChanged={props.onPageChanged}/>
    </div>
  )
}

export default Friends;