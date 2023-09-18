import React, {useEffect} from "react";
import styles from './Dialogs.module.css';
import {DialogsList} from "./DialogsList/DialogsList";
import {MessagesList} from "./MessagesList/MessagesList";
import {Navigate, useParams} from "react-router-dom";
import {startChatting} from "../../../state/dialogsReducer";

const Dialogs = ({dialogsMessages, dialogsList, addChatMessage, isAuth, currentChatUserId, setCurrentChatUserId, startChatting, activeChatUserInfo}) => {
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
                    />
    </div>
  );
};

export default Dialogs;