import * as actionTypes from '../reducertype';

function addWatchlater(movies) {
    // Parse any JSON previously stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem("Watchlater"));
    if(existingEntries == null) existingEntries = [];
    //localStorage.setItem("entry1", JSON.stringify(movies));
    // Save allEntries back to local storage
    existingEntries.push(movies);
    localStorage.setItem("Watchlater", JSON.stringify(existingEntries));
};

function addWatched(movies) {
    // Parse any JSON previously stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem("Watched"));
    if(existingEntries == null) existingEntries = [];
    //localStorage.setItem("entry1", JSON.stringify(movies));
    // Save allEntries back to local storage
    existingEntries.push(movies);
    localStorage.setItem("Watched", JSON.stringify(existingEntries));
};

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