import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {message: 'Hi, how are you?', likesCount: 35},
        {message: 'It\'s my first post', likesCount: 26}
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },
    sidebarFriends: {
      onlineFriendsList: [
        {name: 'Masha', id: 234},
        {name: 'Vladislav', id: 530},
        {name: 'Olha', id: 1033},
        {name: 'Arkadiy', id: 342},
        {name: 'Alisa', id: 541},
        {name: 'Kirill', id: 123},
        {name: 'Alesya', id: 693},
      ]
    }
  },
  _callSubscriber(){
    console.log('state changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarFriends = sidebarReducer(this._state.sidebarFriends, action);

    this._callSubscriber(this._state);
  },
}

export default store;