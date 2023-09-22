import {dialogsApi} from "../api/api";

const ADD_CHAT_MESSAGE = 'dialogs/ADD-CHAT-MESSAGE';
const GET_FRIENDS_LIST = 'dialogs/GET_FRIENDS_LIST';
const GET_DIALOGS_LIST = 'dialogs/GET_DIALOGS_LIST'
const START_CHATTING_AND_REFRESH_DIALOGS_LIST = 'dialogs/START_CHATTING_AND_REFRESH_DIALOGS_LIST';
const SET_CURRENT_CHAT_USER_ID = 'dialogs/SET_CURRENT_CHAT_USER_ID';
const UPDATE_CHAT_MESSAGES = 'dialogs/UPDATE_CHAT_MESSAGES';

const initialState = {
  dialogsMessages: [],
  dialogsList: [],
  friendsList: [],
  currentChatUserId: null,
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS_LIST: {
      return { ...state, friendsList: [...action.friendsList]}
    }
    case ADD_CHAT_MESSAGE: {
        const newMessage = {
        message: action.message,
      }
      return {
        ...state,
        dialogsMessages: [...state.dialogsMessages, newMessage]
      };
    }
    case GET_DIALOGS_LIST: {
      return { ...state, dialogsList: [...action.dialogsList]}
    }
    case START_CHATTING_AND_REFRESH_DIALOGS_LIST: {
      return { ...state, dialogsList: [...action.refreshedDialogsList]}
    }
    case SET_CURRENT_CHAT_USER_ID: {
      return { ...state, currentChatUserId: action.currentChatUserId}
    }
    case UPDATE_CHAT_MESSAGES: {
      return { ...state, dialogsMessages: [...action.messagesArray]}
    }
    default:
      return state;
  }
}

export const addChatMessageActionCreator = (text) => ({
  type: ADD_CHAT_MESSAGE, message: text
});

export const getFriendsListAC = (friendsList) => ({ type: GET_FRIENDS_LIST, friendsList});
export const getDialogsListAC = (dialogsList) => ({ type: GET_DIALOGS_LIST, dialogsList});
export const updateAllChatsAC = (refreshedDialogsList) => ({ type: START_CHATTING_AND_REFRESH_DIALOGS_LIST, refreshedDialogsList});
export const setCurrentChatUserId = (currentChatUserId) => ({ type: SET_CURRENT_CHAT_USER_ID, currentChatUserId});
export const updateMessages = (messagesArray) => ({ type: UPDATE_CHAT_MESSAGES, messagesArray})
export const getFriendsList = () => async (dispatch) => {
  let res = await dialogsApi.getFriends();
  dispatch(getFriendsListAC(res.items));
}

export const getAllDialogs = () => async (dispatch) => {
  let res = await dialogsApi.getAllDialogs();
  if (res.length > 0) {
    dispatch(getDialogsListAC(res));
  }
}

export const createNewChat = (userId) => async (dispatch) => {
  let res = await dialogsApi.createNewChat(userId);
  if (res.length > 0) {
    dispatch(updateAllChatsAC(res));
  }
}
export const startChatting = (userId) => async (dispatch) => {
  let res = await dialogsApi.getMessages(userId);
    await dispatch(updateMessages(res.items));
    await dispatch(createNewChat(userId));
    await dispatch(getAllDialogs());
}


export const sendNewMessage = (userId, message) => async (dispatch) => {
  let res = await dialogsApi.sendMessage(userId, message);
  if (res.resultCode === 0) {
    let messages = await dialogsApi.getMessages(userId);
    await dispatch(updateMessages(messages.items));
  }
}

export default dialogsReducer;