import React from "react";
import styles from './Friend.module.css';
import {NavLink} from "react-router-dom";
import defaultImg from "../../../../Other/user-smalled.png";

const Friend = ({user, followingInProgress, follow, unfollow, isAuth, loggedUserId, onPageChanged}) => {
  return (
    <div className={styles.friendBlockWrapper} key={user.id}>
      <div className={styles.imgWrapper}>
        <NavLink to={`/profile/${user.id}`}>
          <img className={styles.userImg} src={user.photos.large ?  user.photos.large : defaultImg} alt=""/>
        </NavLink>
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.nameBlockWrapper}>{user.name}</div>
        {user.status ? <div className={styles.statusBlockWrapper}><b>status:</b> {user.status}</div> : ''}
      </div>
      {isAuth && loggedUserId !== user.id ?
        <div className={styles.buttonsWrapper}>
          <button className={styles.sendMessageButton}>Go to chat</button>
          {user.followed === true ?
            <button disabled={followingInProgress.some(id => user.id === id)}
                    onClick={() => {unfollow(user.id); onPageChanged(1)}}
                    className={styles.unfollowButton}>Unfollow</button> :
            <button disabled={followingInProgress.some(id => user.id === id)}
                    onClick={() => {follow(user.id); onPageChanged(1)}}
                    className={styles.followButton}>Follow</button>}
        </div> : ""}
    </div>
  );
}

export default Friend;