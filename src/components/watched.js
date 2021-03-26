import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';


import Navbar from './Navbar';
import WatchedMovieCard from './WatchedMovieCard';

const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        margin: 0,
    },

    container: {
        justifyContent: "center",
        marginTop: "5%"
    },

    card: {
        margin: '2%',
    },

}));

export default function Watched() {
    const classes = useStyles();

    const movies = useSelector(state => state.watched)

    return (
        <div className={classes.root}>
            <Navbar />
            <div>
                <Grid container spacing={3} className={classes.container}>
                    {movies.length > 0 && (movies.map((movie) => (
                        <Grid className={classes.card} key={movie.id}>
                            <WatchedMovieCard movie={movie} />
                        </Grid>
                    ))
                    )}
                </Grid>

            </div>
        </div>
    )
}
