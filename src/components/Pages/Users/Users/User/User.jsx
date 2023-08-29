import styles from "./User.module.css";
import {NavLink} from "react-router-dom";
import defaultImg from "../../../../Other/user-smalled.png";
import React from "react";

const User = ({user, followingInProgress, follow, unfollow, isAuth}) => {
  return (
    <div className={isAuth ? styles.userBlock : styles.userBlockLogout} key={user.id}>
      <div className={styles.imgWrapper}>
        <NavLink to={`/profile/${user.id}`}>
          <img className={styles.userImg} src={user.photos.large ?  user.photos.large : defaultImg} alt=""/>
        </NavLink>
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.nameBlockWrapper}>{user.name}</div>
        {user.status ? <div className={styles.statusBlockWrapper}><b>status:</b> {user.status}</div> : ''}
      </div>
      {isAuth ?
        <div className={styles.buttonsWrapper}>
        {user.followed === true ?
          <button disabled={followingInProgress.some(id => user.id === id)}
                  onClick={() => {unfollow(user.id);}}
                  className={styles.unfollowButton}>Unfollow</button> :
          <button disabled={followingInProgress.some(id => user.id === id)}
                  onClick={() => {follow(user.id);}}
                  className={styles.followButton}>Follow</button>}
        </div> : ""}
    </div>
  );
}

export default User;