import React from "react";
import styles from "../Users.module.css";
import defaultImg from "../../../Other/user-smalled.png";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../../../api/api";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];

  if (props.currentPage <= 5) {
    for (let i= 1; i <= props.currentPage + 11; i++) {
      pages.push(i);
    }
  } else if (props.currentPage + 5 >= pagesCount) {
    for (let i= props.currentPage - 7; i <= pagesCount; i++) {
      pages.push(i);
    }
  } else {
    for (let i=props.currentPage - 5; i <= props.currentPage + 5; i++) {
      pages.push(i);
    }
  }

  return (
    <div className={styles.usersMainWrapper}>
      <div className={styles.paginationWrapper}>
        <span onClick={() => {props.onPageChanged(1)}}>В начало</span>
        {pages.map(pageNumber => <span className={props.currentPage === pageNumber && styles.selectedPage} onClick={() => {props.onPageChanged(pageNumber)}}>{pageNumber}</span>)}
        <span onClick={() => {props.onPageChanged(pagesCount)}}>В конец</span>
      </div>
      <div className={styles.usersBlockWrapper}>
        {props.users.map(user =>
          <div className={styles.userBlock} key={user.id}>
            <div className={styles.imgWrapper}>
              <NavLink to={`/profile/${user.id}`}>
                <img className={styles.userImg} src={user.photos.large ?  user.photos.large : defaultImg} alt=""/>
              </NavLink>
            </div>
            <div className={styles.infoBlock}>
              <div className={styles.nameBlockWrapper}>{user.name}</div>
              {user.status ? <div className={styles.statusBlockWrapper}><b>status:</b> {user.status}</div> : ''}
            </div>
            <div className={styles.buttonsWrapper}>
              {user.followed === true ?
                <button disabled={props.followingInProgress.some(id => user.id === id)} onClick={() => {
                  props.toggleIsFollowingProgress(true, user.id);
                  usersApi.unfollow(user.id)
                    .then(resultCode => {
                      if (resultCode === 0) {
                        props.unfollow(user.id);
                      }
                      props.toggleIsFollowingProgress(false, user.id);
                    });
                }} className={styles.unfollowButton}>Unfollow</button> :
                <button disabled={props.followingInProgress.some(id => user.id === id)} onClick={() => {
                  props.toggleIsFollowingProgress(true, user.id);
                  usersApi.followUser(user.id)
                    .then(resultCode => {
                      if (resultCode === 0) {
                        props.follow(user.id)
                      }
                      props.toggleIsFollowingProgress(false, user.id);
                    });
                }} className={styles.followButton}>Follow</button>}
            </div>
          </div>
        )}
      </div>
      <div className={styles.paginationWrapper}>
        <span onClick={() => {props.onPageChanged(1)}}>В начало</span>
        {pages.map(pageNumber => <span className={props.currentPage === pageNumber && styles.selectedPage} onClick={() => {props.onPageChanged(pageNumber)}}>{pageNumber}</span>)}
        <span onClick={() => {props.onPageChanged(pagesCount)}}>В конец</span>
      </div>
    </div>
  )
}

export default Users;