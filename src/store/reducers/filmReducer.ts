const SET_FILM = 'SET_FILM';
const SET_FILM2 = 'SET_FILM2';
const SET_FILM3 = 'SET_FILM3';

export const actionTypes = {SET_FILM, SET_FILM2, SET_FILM3};
type FilmActionTypes = keyof typeof actionTypes;

type FilmState = {
    film: string
}

type SetFilmAction = {
    type: FilmActionTypes
    payload: string
}

type FilmActions = SetFilmAction;

const initialState: FilmState = {
    film: 'name'
}

export const filmReducer = (state = initialState, action: FilmActions): FilmState => {
    switch (action.type) {
        case SET_FILM:
            return {film: action.payload}
        default:
            return state;
    }
}
