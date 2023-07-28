import React from "react";
import styles from './OnlineFriendsListItem.module.css';
import defaultImage from '../../Other/user.png';

const OnlineFriendsListItem = (props) => {
  return (
    <div className={styles.friendItem} data-id={props.id}>
      <img src={defaultImage} alt=""/>
      <span>{props.friendName}</span>
    </div>
  );
};

export default OnlineFriendsListItem;