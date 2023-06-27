let store = {
  _state: {
    profilePage: {
      posts: [
        {message: 'Hi, how are you?', likesCount: 35},
        {message: 'It\'s my first post', likesCount: 26}
      ],
      newPostText: 'test text',
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
    if(action.type === 'ADD-POST') {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
}

export default store;