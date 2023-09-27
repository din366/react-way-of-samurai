import {profileApi} from "../api/api";
import {errorAuthFetching, setAuthUserData, toggleAuthIsFetching, updateHeaderUserPhoto} from "./authReducer";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const CHANGE_PHOTO_SUCCESS = 'profile/CHANGE_PHOTO';
const SET_EDIT_USER_MODE = 'profile/SET_EDIT_USER_MODE';
const SET_SEND_USER_DATA_STATUS = 'profile/SET_SEND_USER_DATA_STATUS';
const SET_GENERAL_SEND_USER_DATA_ERROR = 'profile/SET_GENERAL_SEND_USER_DATA_ERROR';
const SET_GENERAL_SEND_USER_DATA_ERROR_MESSAGE = 'profile/SET_GENERAL_SEND_USER_DATA_ERROR_MESSAGE';

const initialState =  {
  posts: [
    {message: 'Hi, how are you?', likesCount: 35},
    {message: 'It\'s my first post', likesCount: 26}
  ],
  newPostText: '',
  profile: null,
  status: '',
  editUserMode: false,
  sendUserDataStatus: false,
  isGeneralSendUserDataError: false,
  isGeneralSendUserDataErrorMessage: null,
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
      return { ...state, status: action.status}
    }
    case CHANGE_PHOTO_SUCCESS : {
      return { ...state, profile: {...state.profile, photos: action.photo}}
    }
    case SET_EDIT_USER_MODE: {
      return { ...state, editUserMode: action.status}
    }
    case SET_SEND_USER_DATA_STATUS: {
      return { ...state, sendUserDataStatus: action.status}
    }
    case SET_GENERAL_SEND_USER_DATA_ERROR: {
      return { ...state, isGeneralSendUserDataError: action.data.status, isGeneralSendUserDataErrorMessage: action.data.message}
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfile = (userId) => ({type: SET_USER_PROFILE, userId})

export const setStatus = (status) => ({ type: SET_STATUS, status});

export const changePhotoSuccess = (photo) => ({ type: CHANGE_PHOTO_SUCCESS, photo});

export const setEditUserModeActionCreator = (status) => ({ type: SET_EDIT_USER_MODE, status});

export const setSendUserDataStatusActionCreator = (status) => ({ type: SET_SEND_USER_DATA_STATUS, status});

export const setGeneralSendUserDataError = (status, message) => ({ type: SET_GENERAL_SEND_USER_DATA_ERROR, data: {status, message}});

export const setEditUserMode = (status) => dispatch => {
  dispatch(setEditUserModeActionCreator(status));
}

export const setSendUserDataStatus = (status)=> dispatch => {
  dispatch(setSendUserDataStatusActionCreator(status));
}

/* for redux thunk */
export const getProfile = (userId) => async (dispatch) => {
  try {
    let data = await profileApi.getProfile(userId);
    dispatch(setUserProfile(data));
  } catch {
    console.warn('user is not defined')
  }

};

export const getStatus = (userId) => async (dispatch) => {
  try {
    let data = await profileApi.getStatus(userId)
    dispatch(setStatus(data.data));
  } catch {
    console.warn('status is not returned in request')
  }

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

export const editUserInfo = (userId, aboutMe, fullName, lookingForAJobObject, contactsObject) => async (dispatch) => {
  let compileObject = {
    userId,
    aboutMe,
    fullName,
    lookingForAJob: lookingForAJobObject.lookingForAJob,
    lookingForAJobDescription: lookingForAJobObject.lookingForAJobDescription,
    contacts: {
      github: contactsObject.githubContact,
      vk: null,
      facebook: contactsObject.facebookContact,
      instagram: null,
      twitter: contactsObject.twitterContact,
      website: contactsObject.websiteContact,
      youtube: null,
      mainLink: null,
    }
  }

  dispatch(setSendUserDataStatusActionCreator(true));
  let responce = await profileApi.editUser(compileObject);

  if (responce.data.resultCode === 0) {
    dispatch(setEditUserModeActionCreator(false));
    dispatch(getProfile(compileObject.userId));
    dispatch(setSendUserDataStatusActionCreator(false))
  } else {
    dispatch(setGeneralSendUserDataError(true, responce.data.messages.join(', ')));
    dispatch(setSendUserDataStatusActionCreator(false));
    setTimeout(() => {
      dispatch(setGeneralSendUserDataError(false, null));
    }, 3000)
  }
  dispatch(setSendUserDataStatusActionCreator(false));
}

export default profileReducer;