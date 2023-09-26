import React, {useEffect, useRef} from "react";
import styles from './MessagesList.module.css';
import {SingleMessage} from "./SingleMessage/SingleMessage";
import AddMessageBlock from "./AddMessageBlock/AddMessageBlock";
import defaultUserPhoto from './../../../Other/user.png'
import {formatDate} from "../../../../utils/formatDate";
import {Link} from "react-router-dom";
import backLogo from "./../../../Other/arrow-white.png"
export const MessagesList = ({dialogsMessages, addChatMessage, onChangeMessageArea, currentChatUserId, activeChatUserInfo,
                               sendMessage, loggedUserPhoto, getNewPortionOldMessages, currentMessagePage, toggleChatsMenu}) => {
  const messagesEndRef = useRef(null);

  let seenUserData = null;
  if (activeChatUserInfo) {
    seenUserData = (new Date(activeChatUserInfo.lastUserActivityDate)).toString();
  }

  const scrollToBottom = () => {
    if (messagesEndRef.current && currentMessagePage === 1) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(scrollToBottom, [dialogsMessages]);

  return (
    <div className={styles.messagesList}>
      {currentChatUserId && activeChatUserInfo ?
        <div>
          <div className={styles.userHeader}>
            <div className={styles.backToChatsMenuButton} onClick={() => {toggleChatsMenu(true)}}>
              <img src={backLogo} alt="back"/>
            </div>
            <Link to={`/profile/${currentChatUserId}`}>
              <img src={activeChatUserInfo.photos && activeChatUserInfo.photos.large ? activeChatUserInfo.photos.large : defaultUserPhoto} alt="userPhoto"/>
            </Link>


            <div className={styles.userInfo}>
              <span className={styles.UserName}>{activeChatUserInfo.userName}</span>
              <span className={styles.UserName}>last seen at {formatDate(seenUserData)}</span>
            </div>
          </div>
          <div className={styles.messagesBlockWrapper} onClick={() => {toggleChatsMenu(false)}}>
            {dialogsMessages.length < 10 ? '' : <button className={styles.getOldMessageButton} onClick={() => getNewPortionOldMessages(currentChatUserId, currentMessagePage + 1)}>get old messages</button>}
            {dialogsMessages.map(item => <SingleMessage data={item} currentChatUserId={currentChatUserId} activeChatUserInfo={activeChatUserInfo} loggedUserPhoto={loggedUserPhoto}/>)}
            <div ref={messagesEndRef} />
            <AddMessageBlock addChatMessage={addChatMessage} onChangeMessageArea={onChangeMessageArea} currentChatUserId={currentChatUserId} sendMessage={sendMessage}/>
          </div>
        </div> :
        <div className={styles.noMessages}>
          <div>
            <span>No active dialogues</span>
            <span>select dialogue on the left</span>
            <button className={styles.goChatButton} onClick={() => {toggleChatsMenu(true)}}>Select chat</button>
          </div>
        </div>
        }
    </div>
  )
};