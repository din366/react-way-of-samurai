import {authApi, securityApi} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const AUTH_FETCHING_TOGGLE = 'auth/AUTH_FETCHING_TOGGLE';
const ERROR_AUTH_FETCHING = 'auth/ERROR_AUTH_FETCHING';
const UPDATE_HEADER_USER_PHOTO = 'auth/UPDATE_HEADER_USER_PHOTO';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

const initialState =  {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  smallLogo: null,
  isFetching: false,
  errorAuthFetching: false,
  errorAuthFetchingMessage: null,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        isAuth: action.isAuth,
        ...action.data,
      }
    }
    case AUTH_FETCHING_TOGGLE: {
      return { ...state, isFetching: action.isFetching}
    }
    case ERROR_AUTH_FETCHING: {
      return { ...state, errorAuthFetching: action.data.isError, errorAuthFetchingMessage: action.data.message}
    }
    case UPDATE_HEADER_USER_PHOTO: {
      return { ...state, smallLogo: action.newPhoto}
    }
    case GET_CAPTCHA_URL_SUCCESS: {
      return { ...state, captchaUrl: action.url}
    }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, smallLogo, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, smallLogo, isAuth} });
export const toggleAuthIsFetching = (isFetching) => ({ type: AUTH_FETCHING_TOGGLE, isFetching});

export const errorAuthFetching = (isError, message) => ({type: ERROR_AUTH_FETCHING, data: {isError, message}});

export const updateHeaderUserPhoto = (newPhoto) => ({ type: UPDATE_HEADER_USER_PHOTO, newPhoto});

export const getCaptchaUrlSuccess = (url) => ({ type: GET_CAPTCHA_URL_SUCCESS, url});

/* for redux thunk */
export const requestAuth = () => (dispatch) => {
    dispatch(toggleAuthIsFetching(true));

    return authApi.getLoggedInfoUser()
      .then(data => {
        if (data.resultCode === 0) {
          const {id, login, email} = data.data;
           return authApi.getLoggedImageUser(id)
            .then(imageUrl => {
              dispatch(setAuthUserData(id, email, login, imageUrl, true));
              dispatch(toggleAuthIsFetching(false));
              return 1
            });
        } else {
          dispatch(toggleAuthIsFetching(false));
        };
      });
}
export const login = (email, password, rememberMe, captcha = null) => async dispatch => {
  dispatch(toggleAuthIsFetching(true));
  let res = await authApi.login(email, password, rememberMe, captcha);

  if (res.data.resultCode === 0) {
    dispatch(requestAuth());
    dispatch(getCaptchaUrlSuccess(null)); // clear captcha block after success login
  } else {
    if (res.data.resultCode === 10) {
      dispatch(getCaptchaUrlSuccess(null)); // clear captcha block before new captcha image
      dispatch(getCaptchaUrl());
    }
    dispatch(errorAuthFetching(true, res.data.messages.join(', ')));
    dispatch(setAuthUserData(null, null, null, null, false));
    dispatch(toggleAuthIsFetching(false));
    setTimeout(() => {
      dispatch(errorAuthFetching(false, null));
    }, 3000)
  }
}

export const logout = () => async dispatch => {
  let res = await authApi.logout();

  if (res.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, null, false));
  }
}

export const getCaptchaUrl = () => async dispatch => {
  let res = await securityApi.getCaptchaUrl();
  let captchaUrl = res.data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export default authReducer;