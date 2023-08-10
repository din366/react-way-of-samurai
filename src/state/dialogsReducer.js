const ADD_CHAT_MESSAGE = 'ADD-CHAT-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default dialogsReducer;