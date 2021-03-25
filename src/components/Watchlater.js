import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';


import Navbar from './Navbar';
import WatchlaterMovieCard from './WatchlaterMovieCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    container: {
        justifyContent: "center",
        marginTop: "3%"
    },

    card: {
        margin: '2%',
    },

}));

export default function Watchlater() {
    const classes = useStyles();

    const movies = useSelector(state => state.watchlater);

    return (
        <div className={classes.root}>
            <Navbar />
            <div>
                <Grid container spacing={3} className={classes.container}>
                    {movies.length > 0 && (movies.map((movie) => (
                        <Grid className={classes.card} key={movie.id}>
                            <WatchlaterMovieCard movie={movie} />
                        </Grid>
                    ))
                    )}
                </Grid>

            </div>
        </div>
    )
}
