export const SHOW_ACTIONS = {
  ADD_SHOW: 'ADD_SHOW',
  REMOVE_SHOW: 'REMOVE_SHOW'
} as const;

export type ShowState = {
  [id: number]: Show;
};

export type AddShowAction = {
  type: typeof SHOW_ACTIONS.ADD_SHOW;
  payload: Show;
};

export type RemoveShowAction = {
  type: typeof SHOW_ACTIONS.REMOVE_SHOW;
  payload: number;
};

export type ShowAction = AddShowAction | RemoveShowAction;