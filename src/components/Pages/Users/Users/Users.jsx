import React from "react";
import styles from "../Users.module.css";
import defaultImg from "../../Dialogs/DialogsList/DialogsItem/user.png";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i=1; i<=pagesCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <div>
        {props.users.map(user =>
          <div key={user.id}>
            <div className={styles.leftBlock}>
              <img className={styles.userImg} src={user.photos.small ?  user.photos.small : defaultImg} alt=""/>
              {user.followed === true ?
                <button onClick={() => {props.unfollow(user.id)}} className={styles.followButton}>Unfollow</button> :
                <button onClick={() => {props.follow(user.id)}} className={styles.followButton}>Follow</button>}
            </div>
            <div className={styles.rightBlock}>
              <div className={styles.nameBlockWrapper}>{user.name}</div>
              <div className={styles.statusBlockWrapper}>{user.status}</div>
            </div>
          </div>
        )}
      </div>
      <div>
        {pages.map(pageNumber => <span className={props.currentPage === pageNumber && styles.selectedPage} onClick={() => {props.onPageChanged(pageNumber)}}>{pageNumber}</span>)}
      </div>
    </>
  )
}

export default Users;