const ADD_CHAT_MESSAGE = 'ADD-CHAT-MESSAGE';
const UPDATE_CHAT_NEW_MESSAGE = 'UPDATE-CHAT-NEW-MESSAGE';

const initialState = {
  dialogsMessages: [
    {message: 'Hi'},
    {message: 'How are you?'},
    {message: 'Not bad!'}
  ],
  dialogsList: [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Nikolay'},
    {id: 3, name: 'Petr'},
    {id: 4, name: 'Natasha'},
    {id: 5, name: 'Maxim'},
    {id: 6, name: 'Andrey'},
  ],
  sendCurrentMessage: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_MESSAGE:
        const newMessage = {
        message: state.sendCurrentMessage,
      }
      state.dialogsMessages.push(newMessage);
      state.sendCurrentMessage = '';
      return state;
    case UPDATE_CHAT_NEW_MESSAGE:
      state.sendCurrentMessage = action.sendCurrentMessage;
      return state;
    default:
      return state;
  }
}

export const addChatMessageActionCreator = (text) => ({
  type: ADD_CHAT_MESSAGE, messageText: text
});

export const updateChatNewMessageActionCreator = (text) => ({
  type: UPDATE_CHAT_NEW_MESSAGE, sendCurrentMessage: text
})

export default dialogsReducer;