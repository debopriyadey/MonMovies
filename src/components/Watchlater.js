import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Typist from 'react-typist';

import Navbar from './Navbar';
import MovieCard from './MovieCard';

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

    // introText: {
    //     color: "white",
    //     margin: "30px",
    //     height: "100px",
    //     display: "flex",
    //     alignItems: "flex-end",
    // },

    text: {
        color: "white",
        height: "70vh",
        display: "grid",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Bodoni MT Black",
    },

}));

export default function Watchlater() {
    const classes = useStyles();

    const movies = useSelector(state => state.watchlater);
    console.log(movies.length);

    return (
        <div className={classes.root}>
            <Navbar />
            {/* <h1 className={classes.introText}> My Watchlater </h1> */}
            <div>
                {movies.length === 0 ?
                    <Typist>
                        <h1 className={classes.text}> You have no movies saved in your Watchlater . </h1>
                    </Typist> :
                    <Grid container spacing={3} className={classes.container}>
                        {movies.length > 0 && (movies.map((movie) => (
                            <Grid className={classes.card} key={movie.id}>
                                <MovieCard movie={movie} />
                            </Grid>
                        ))
                        )}
                    </Grid>
                }
            </div>
        </div>
    )
}
