import React from "react";
import styles from "./Users.module.css";
import Paginator from "../../../Other/Paginator/Paginator";
import User from "./User/User";

const Users = (props) => {
  return (
    <div className={styles.usersMainWrapper}>
      <Paginator totalCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>

      <div className={styles.usersBlockWrapper}>
        {props.users.map(user =>
          <User user={user} followingInProgress={props.followingInProgress} unfollow={props.unfollow}
                follow={props.follow} isAuth={props.isAuth} loggedUserId={props.loggedUserId}/>
        )}
      </div>

      <Paginator totalCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
    </div>
  )
}

export default Users;