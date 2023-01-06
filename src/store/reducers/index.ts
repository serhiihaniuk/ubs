import { combineReducers } from 'redux';
import { showReducer } from './showReducer';

export const rootReducer = combineReducers({
    selectedShow: showReducer
});

export type RootState = ReturnType<typeof rootReducer>
