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

        case actionTypes.DELETEWATCHLATER:
            return {
                ...state,
                watchlater: state.watchlater.filter(movies => movies.id !== action.payload)
            }

        case actionTypes.DELETEWATCHED:
            return {
                ...state,
                watched: state.watched.filter(movies => movies.id !== action.payload)
            }

        default:
            return state
    }
}

export default movies