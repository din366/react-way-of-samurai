import React from "react";
import styles from './SingleMessage.module.css';
import user from './../../../../Other/user.png';
import {formatDate} from "../../../../../utils/formatDate";
import sendedIcon from "./../../../../Other/sended.png";
import readIcon from "./../../../../Other/read.png";

export const SingleMessage = ({data, currentChatUserId, activeChatUserInfo, loggedUserPhoto}) => {
  const {addedAt, body, id, recipientId, senderId, senderName, viewed} = data;

  let activeChatUserPhoto = activeChatUserInfo.photos.large ? activeChatUserInfo.photos.large : user;
  const loggedUser = loggedUserPhoto ? loggedUserPhoto : user;

  return (
    <div className={`${styles.message} ${+currentChatUserId !== +senderId ? styles.myMessage : ''}`} key={id}>
      <div className={styles.messageUserInfo}>
        <img src={+currentChatUserId === +senderId ? activeChatUserPhoto : loggedUser} alt="user photo"/>
      </div>
      <div className={styles.messageWrapper}>
        <span>{body}</span>
      </div>
      <div className={styles.sendDateWrapper}>
        <span>{viewed ? <img className={styles.readStatus} src={readIcon} alt=""/> : <img className={styles.readStatus} src={sendedIcon} alt=""/>}</span> <span>{formatDate(addedAt)}</span>
      </div>

    </div>
  );
};