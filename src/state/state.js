const state = {
  profilePage: {
    posts: [
      {message: 'Hi, how are you?', likesCount: 35},
      {message: 'It\'s my first post', likesCount: 26}
    ],
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
  sidebarFriens: {
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
}

export default state;