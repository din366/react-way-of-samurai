import {requestAuth} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState =  {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: action.bool,
      }
    }
    default:
      return state;
  }
}

export const setInitialized = (bool) => ({ type: SET_INITIALIZED, bool });

/* for redux thunk */
export const initializeApp = () => dispatch => {
  let abc = dispatch(requestAuth());
  abc.then((data) => {
      console.log(data);
      dispatch(setInitialized(true));
    });

}


export default appReducer;