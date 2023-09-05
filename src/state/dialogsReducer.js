import {dialogsApi} from "../api/api";

const ADD_CHAT_MESSAGE = 'dialogs/ADD-CHAT-MESSAGE';
const GET_FRIENDS_LIST = 'dialogs/GET_FRIENDS_LIST';

const initialState = {
  dialogsMessages: [
    {message: 'Hi'},
    {message: 'How are you?'},
    {message: 'Not bad!'}
  ],
  dialogsList: [],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS_LIST: {
      return { ...state, dialogsList: [...action.friendsList]}
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
    default:
      return state;
  }
}

export const addChatMessageActionCreator = (text) => ({
  type: ADD_CHAT_MESSAGE, message: text
});

export const getFriendsListAC = (friendsList) => ({ type: GET_FRIENDS_LIST, friendsList});

export const getFriendsList = () => async (dispatch) => {
  let res = await dialogsApi.getFriends();
  dispatch(getFriendsListAC(res.items));
}

export default dialogsReducer;