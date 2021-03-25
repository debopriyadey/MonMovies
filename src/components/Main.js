import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


import Navbar from './Navbar';
import MovieCard from './MovieCard';

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

export default function Main() {
    const classes = useStyles();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=620bcff5c65556bbc5abc99f82b7164a&language=en-US&page=1&include_adult=false`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, [])

    return (
        <div className={classes.root}>
            <Navbar />
            <div>
                <Grid container spacing={3} className={classes.container}>
                    {movies.length > 0 && (movies.map((movie) => (
                        <Grid className={classes.card} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Grid>
                    ))
                    )}
                </Grid>

            </div>
        </div>
    )
}
