import {profileApi} from "../api/api";
import {updateHeaderUserPhoto} from "./authReducer";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const CHANGE_PHOTO_SUCCESS = 'profile/CHANGE_PHOTO';

const initialState =  {
  posts: [
    {message: 'Hi, how are you?', likesCount: 35},
    {message: 'It\'s my first post', likesCount: 26}
  ],
  newPostText: '',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.userId}
    }
    case SET_STATUS : {
      return { ...state, status: action.status};
    }
    case CHANGE_PHOTO_SUCCESS : {
      return { ...state, profile: {...state.profile, photos: action.photo}}
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfile = (userId) => ({type: SET_USER_PROFILE, userId})

export const setStatus = (status) => ({ type: SET_STATUS, status});

export const changePhotoSuccess = (photo) => ({ type: CHANGE_PHOTO_SUCCESS, photo})

/* for redux thunk */
export const getProfile = (userId) => async (dispatch) => {
  let data = await profileApi.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
  let data = await profileApi.getStatus(userId)
  dispatch(setStatus(data.data));
}

export const updateStatus = (status) => async (dispatch) => {
  let data = await profileApi.updateStatus(status);

  if (data.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}

export const changePhoto = (file) => async (dispatch) => {
  let responce = await profileApi.savePhoto(file);

  if (responce.data.resultCode === 0) {
    dispatch(changePhotoSuccess(responce.data.data.photos));
    dispatch(updateHeaderUserPhoto(responce.data.data.photos.large));
  }

}

export default profileReducer;