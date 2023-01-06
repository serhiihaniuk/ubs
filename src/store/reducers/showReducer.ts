import { SHOW_ACTIONS, ShowAction, ShowState } from '@src/store/types/reduxShowTypes';

const initialState: ShowState = {};

export const showReducer = (state = initialState, action: ShowAction): ShowState => {
  switch (action.type) {
    case SHOW_ACTIONS.ADD_SHOW:
      action.payload.dateAdded = new Date().getTime();
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case SHOW_ACTIONS.REMOVE_SHOW: {
      const newState: ShowState = {};
      for (const key in state) {
        if (state[key].id !== action.payload) {
          newState[key] = state[key];
        }
      }
      return newState;
    }
    default:
      return state;
  }
};
