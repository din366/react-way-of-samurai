const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState =  {
  users: [],
  newPostText: '',
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        }),
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        }),
      }
    }

    case SET_USERS: {
      return { ...state, users: [/*...state.users, */...action.users] } // раскомментировать для infiniteScroll
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalPagesCount}
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching}
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.followingStatus ?
          [...state.followingInProgress, action.userId] : // if followingStatus true - push user id in array
          state.followingInProgress.filter(id => id !== action.userId) // create new array and filter so that only the current button is disabled
      }
    }
    default:
      return state;
  }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalPagesCount) => ({ type: SET_TOTAL_USERS_COUNT, totalPagesCount});
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (followingStatus, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followingStatus, userId});

export default usersReducer;