import {createSelector} from "reselect";

export const getUsersPageSelector = (state) => {
  return state.usersPage.users;
}

export const getPageSizeSelector = (state) => {
  return state.usersPage.pageSize;
}

export const getTotalUsersCountSelector = (state) => {
  return state.usersPage.totalUsersCount;
}

export const getCurrentPageSelector = (state) => {
  return state.usersPage.currentPage;
}

export const isFetchingSelector = (state) => {
  return state.usersPage.isFetching;
}

export const isFollowingProgressSelector = (state) => {
  return state.usersPage.followingInProgress;
}

// Reselect library

export const getUsersPageReselect = createSelector( getUsersPageSelector, (users) => {
  return users;
});

export const getPageSizeReselect = createSelector( getPageSizeSelector, (pageSize) => {
  return pageSize;
})

export const getTotalUsersCountReselect = createSelector( getTotalUsersCountSelector, (totalUsersCount) => {
  return totalUsersCount;
})

export const getCurrentPageReselect = createSelector( getCurrentPageSelector, (currentPage) => {
  return currentPage;
})

export const isFetchingReselect = createSelector( isFetchingSelector, (isFetching) => {
  return isFetching;
})

export const isFollowingProgressReselect = createSelector( isFollowingProgressSelector, (followingInProgress) => {
  return followingInProgress;
})