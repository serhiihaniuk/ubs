import { AddShowAction, RemoveShowAction, SHOW_ACTIONS } from '@src/store/types/reduxShowTypes';
import { bindActionCreators } from 'redux';
import { store } from '@src/store';

const addShowToList = (payload: Show): AddShowAction => ({
  type: SHOW_ACTIONS.ADD_SHOW,
  payload
});
const removeShowFromList = (payload: number): RemoveShowAction => ({
  type: SHOW_ACTIONS.REMOVE_SHOW,
  payload
});

export const boundShowActions = bindActionCreators(
  {
    add: addShowToList,
    remove: removeShowFromList
  },
  store.dispatch
);