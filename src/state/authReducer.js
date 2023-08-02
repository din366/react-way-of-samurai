const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


const initialState =  {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      console.log(action)
      return {
        ...state,
        isAuth: action.isAuth,
        ...action.data,
      }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching}
    }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
  return ({ type: SET_USER_DATA, data: {userId, email, login, isAuth} });
}
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching});

export default authReducer;