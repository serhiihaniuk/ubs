import {combineReducers} from "redux";
import {filmReducer} from "./filmReducer";

export const rootReducer = combineReducers({
    films: filmReducer
})

export type RootState = ReturnType<typeof rootReducer>
