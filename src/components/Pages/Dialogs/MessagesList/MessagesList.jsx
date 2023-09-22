import React, {useEffect, useRef} from "react";
import styles from './MessagesList.module.css';
import {SingleMessage} from "./SingleMessage/SingleMessage";
import AddMessageBlock from "./AddMessageBlock/AddMessageBlock";
import defaultUserPhoto from './../../../Other/user.png'
import {formatDate} from "../../../../utils/formatDate";
export const MessagesList = ({dialogsMessages, addChatMessage, onChangeMessageArea, currentChatUserId, activeChatUserInfo, sendMessage, loggedUserPhoto}) => {
  const messagesEndRef = useRef(null);

  let seenUserData = null;
  if (activeChatUserInfo) {
    seenUserData = (new Date(activeChatUserInfo.lastUserActivityDate)).toString();
  }

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(scrollToBottom, [dialogsMessages]);

  return (
    <div className={styles.messagesList}>
      {currentChatUserId && activeChatUserInfo ?
        <div>
          <div className={styles.userHeader}>
            <img src={activeChatUserInfo.photos && activeChatUserInfo.photos.large ? activeChatUserInfo.photos.large : defaultUserPhoto} alt="userPhoto"/>

            <div className={styles.userInfo}>
              <span className={styles.UserName}>{activeChatUserInfo.userName}</span>
              <span className={styles.UserName}>last seen at {formatDate(seenUserData)}</span>
            </div>
          </div>
          <div className={styles.messagesBlockWrapper}>
            {dialogsMessages.map(item => <SingleMessage data={item} currentChatUserId={currentChatUserId} activeChatUserInfo={activeChatUserInfo} loggedUserPhoto={loggedUserPhoto}/>)}
            <div ref={messagesEndRef} />
            <AddMessageBlock addChatMessage={addChatMessage} onChangeMessageArea={onChangeMessageArea} currentChatUserId={currentChatUserId} sendMessage={sendMessage}/>
          </div>
        </div> :
        <div className={styles.noMessages}>
          <div>
            <span>No active dialogues</span>
            <span>select dialogue on the left</span>
          </div>
        </div>
        }
    </div>
  )
};