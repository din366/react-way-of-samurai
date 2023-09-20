import React from "react";
import styles from './SingleMessage.module.css';
import user from './../../../../Other/user.png';
import {formatDate} from "../../../../../utils/formatDate";

export const SingleMessage = ({data, currentChatUserId, activeChatUserInfo, loggedUserPhoto}) => {
  const {addedAt, body, id, recipientId, senderId, senderName, viewed} = data;

  const activeChatUserPhoto = activeChatUserInfo.photos.large ? activeChatUserInfo.photos.large : user;
  const loggedUser = loggedUserPhoto ? loggedUserPhoto : user;

  return (
    <div className={styles.message} key={id}>
      <div className={styles.messageUserInfo}>
        <img src={currentChatUserId === senderId ? activeChatUserPhoto : loggedUser} alt="user photo"/>
        <span>{senderName}</span>
      </div>
      <div className={styles.messageWrapper}>
        <span>{body}</span>
      </div>
      <div className={styles.sendDateWrapper}>
        <span>{formatDate(addedAt)}</span>
      </div>

    </div>
  );
};