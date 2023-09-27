import React, {useEffect} from "react";
import styles from "./Users.module.css";
import Paginator from "../../../Other/Paginator/Paginator";
import User from "./User/User";

const Users = (props) => {
  const input = React.useRef();
  const onlyFriends = (e) => {
    props.getUsers(1, 50, e.target.checked);
  }

  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize, input.checked)
  }, [props.showOnlyFriends])

  return (
    <div className={styles.usersMainWrapper}>
      <Paginator totalCount={props.totalUsersCount}
                 pageSize={props.pageSize}
                 currentPage={props.currentPage}
                 onPageChanged={props.onPageChanged}
                 paginationWrapperFirstForCss={true}/>
      {props.isAuth ?
        <div className={styles.OnlyFriendsBlockWrapper}>
          <label htmlFor='onlyFriendsInput'>Show friends</label>
          <input id='onlyFriendsInput' type="checkbox" onChange={onlyFriends} ref={input}/>
        </div> : ''
      }



      <div className={styles.usersBlockWrapper}>
        {props.users.map(user =>
          <User key={user.id} user={user} followingInProgress={props.followingInProgress} unfollow={props.unfollow}
                follow={props.follow} isAuth={props.isAuth} loggedUserId={props.loggedUserId}/>
        )}
      </div>

      <Paginator totalCount={props.totalUsersCount}
                 pageSize={props.pageSize}
                 currentPage={props.currentPage}
                 onPageChanged={props.onPageChanged}/>
    </div>
  )
}

export default Users;