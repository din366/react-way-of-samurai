import profileReducer, {addPostActionCreator} from "./profileReducer";

const state = {
  posts: [
    {message: 'Hi, how are you?', likesCount: 35},
    {message: 'It\'s my first post', likesCount: 26}
  ],
  newPostText: '',
  profile: null,
  status: '',
}

it('newPostShouldBeAdded', () => {
  const action = addPostActionCreator('Test text')

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
})

it('newPostMessage', () => {
  const action = addPostActionCreator('Test text')

  let newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe('Test text')
})

