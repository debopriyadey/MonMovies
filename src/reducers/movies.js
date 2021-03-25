import * as actionTypes from '../reducertype';

const initialState = {
    watchlater: JSON.parse(localStorage.getItem("Watchlater")) === null ? [] : JSON.parse(localStorage.getItem("Watchlater")),
    watched: JSON.parse(localStorage.getItem("Watched")) === null ? [] : JSON.parse(localStorage.getItem("Watched"))
}

const movies = (state = initialState, action) => {
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