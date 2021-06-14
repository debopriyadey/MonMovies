import * as actionTypes from '../reducertype';

function addWatchlater(movies) {
    // Parse any JSON previously stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem("Watchlater"));
    if (existingEntries == null) existingEntries = [];
    //localStorage.setItem("entry1", JSON.stringify(movies));
    // Save allEntries back to local storage
    existingEntries.push(movies);
    localStorage.setItem("Watchlater", JSON.stringify(existingEntries));
};

function addWatched(movies) {
    // Parse any JSON previously stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem("Watched"));
    if (existingEntries == null) existingEntries = [];
    //localStorage.setItem("entry1", JSON.stringify(movies));
    // Save allEntries back to local storage
    existingEntries.push(movies);
    localStorage.setItem("Watched", JSON.stringify(existingEntries));
};

function removeWatchlater(movies) {
    var movieIndex = 0;
    var savedMovies = JSON.parse(localStorage.getItem("Watchlater")) === null ? [] : JSON.parse(localStorage.getItem("Watchlater"));
    for (let user of savedMovies) {
        if (user.id === movies.id) {
            var existingEntries = JSON.parse(localStorage.getItem("Watchlater"));
            existingEntries.splice(movieIndex, 1);
            localStorage.setItem("Watchlater", JSON.stringify(existingEntries));
            break;
        } else {
            movieIndex += 1;
            continue;
        }
    }
}

function removeWatched(movies) {
    var movieIndex = 0;
    var savedMovies = JSON.parse(localStorage.getItem("Watched")) === null ? [] : JSON.parse(localStorage.getItem("Watched"));
    for (let user of savedMovies) {
        if (user.id === movies.id) {
            var existingEntries = JSON.parse(localStorage.getItem("Watched"));
            existingEntries.splice(movieIndex, 1);
            localStorage.setItem("Watched", JSON.stringify(existingEntries));
            break;
        } else {
            movieIndex += 1;
            continue;
        }
    }
}

export const watchlater = (movies) => {
    addWatchlater(movies)
    return {
        type: actionTypes.WATCHLATER,
        payload: movies,

    }

}

export const watched = (movies) => {
    addWatched(movies)
    return {
        type: actionTypes.WATCHED,
        payload: movies
    }
}

export const deletewatchlater = (movies) => {
    removeWatchlater(movies)
    return {
        type: actionTypes.DELETEWATCHLATER,
        payload: movies.id
    }
}

export const deletewatched = (movies) => {
    removeWatched(movies)
    return {
        type: actionTypes.DELETEWATCHED,
        payload: movies.id
    }
}

export const currentmovie = (movie) => {
    sessionStorage.setItem("currentmovie", JSON.stringify(movie));
    return {
        type: actionTypes.CURRENTMOVIE,
        payload: movie
    }
}