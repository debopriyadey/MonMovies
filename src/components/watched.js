import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Typist from 'react-typist';

import Navbar from './Navbar';
import WatchedMovieCard from './WatchedMovieCard';

const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        margin: 0,
        marginTop: "5%",
    },

    container: {
        justifyContent: "center",
        marginTop: "5%"
    },

    card: {
        margin: '2%',
    },

    text: {
        color: "white",
        height: "70vh",
        display: "grid",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Bodoni MT Black",
    },

}));

export default function Watched() {
    const classes = useStyles();

    const movies = useSelector(state => state.watched)

    return (
        <div className={classes.root}>
            <Navbar />
            <div>
                {movies.length === 0 ?
                    <Typist>
                        <h1 className={classes.text}> You have no movies saved in your Watched . </h1>
                    </Typist> :
                    <Grid container spacing={3} className={classes.container}>
                        {movies.length > 0 && (movies.map((movie) => (
                            <Grid className={classes.card} key={movie.id}>
                                <WatchedMovieCard movie={movie} />
                            </Grid>
                        ))
                        )}
                    </Grid>
                }

            </div>
        </div>
    )
}
