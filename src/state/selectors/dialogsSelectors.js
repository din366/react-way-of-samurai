import {createSelector} from "reselect";

export const getDialogsUsersSelector = (state) => {
  return state.dialogsPage.dialogsList;
}

export const getActiveChatUserInfoSelector = (state) => {
  return [state.dialogsPage.currentChatUserId, state.dialogsPage.dialogsList];
}
export const getDialogsUsersReselect = createSelector( getDialogsUsersSelector, (users) => {
  const res = users.reduce((o, i) => {
    if (!o.find(v => v.id === i.id)) {
      o.push(i);
    }
    return o;
  }, []);

  return res;
});

export const getActiveChatInfoReselect = createSelector( getActiveChatUserInfoSelector , (array) => {
  const [currentChatUserId, dialogsList] = array;

  return dialogsList.find((item) => item.id === +currentChatUserId);
})

