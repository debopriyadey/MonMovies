import * as actionTypes from '../reducertype';

const state = {
    watchlater: [],
    watched: []
}

const movies = (initialState = state, action) => {
    switch (action.type) {
        case actionTypes.WATCHLATER:
            return {
                ...state,
                watchlater: [action.payload, ...state.watchlater]

            };

        case actionTypes.WATCHED:
            return {
                ...state,
                watched: [action.payload, ...state.watched]

            };

        default:
            return state
    }
}

export default movies