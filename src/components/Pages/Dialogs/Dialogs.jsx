import React, {useEffect} from "react";
import styles from './Dialogs.module.css';
import {DialogsList} from "./DialogsList/DialogsList";
import {MessagesList} from "./MessagesList/MessagesList";
import {Navigate, useParams} from "react-router-dom";

const Dialogs = ({dialogsMessages, dialogsList, addChatMessage, isAuth, loggedUserPhoto,
                   currentChatUserId, setCurrentChatUserId, startChatting, activeChatUserInfo, sendMessage,
                   getNewPortionOldMessages, currentMessagePage}) => {
  let { userId } = useParams();

  useEffect(() => {
    if ((!userId && !currentChatUserId) || (!userId && currentChatUserId)) {
      setCurrentChatUserId(null) // clear current chat when user go to main dialogs page (without userId param in URL)
    } else {
      setCurrentChatUserId(userId);
      startChatting(userId)
    }
  }, [userId])

  if (isAuth === false) return <Navigate to={'/login'}/>

  return (
    <div className={styles.dialogs}>
      <DialogsList dialogsList={dialogsList}/>
      <MessagesList dialogsMessages={dialogsMessages}
                    addChatMessage={addChatMessage}
                    currentChatUserId={currentChatUserId}
                    activeChatUserInfo={activeChatUserInfo}
                    sendMessage={sendMessage}
                    loggedUserPhoto={loggedUserPhoto}
                    getNewPortionOldMessages={getNewPortionOldMessages}
                    currentMessagePage={currentMessagePage}
                    />
    </div>
  );
};

export default Dialogs;