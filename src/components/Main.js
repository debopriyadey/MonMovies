import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


import Navbar from './Navbar';
import MovieCard from './MovieCard';
import heroimage from '../images/heroimage.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        margin: 0,
    },

    container: {
        justifyContent: "center",
        marginTop: "5%"
    },

    image: {
        width: "100vw",
        height: "60vh",
        display: "flex",
        backgroundImage: `url(${heroimage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        borderBottom: "solid 10px white",
        [theme.breakpoints.down('md')]: {
            height: "40vh",
        },
        [theme.breakpoints.down('sm')]: {
            height: "30vh",
        },
        [theme.breakpoints.down('xs')]: {
            height: "20vh",
        },
    },

    introText: {
        alignSelf: "center",
        textAlign: "center",
        margin: "0 auto",
        fontSize: "4em",
        fontWeight: "700",
        lineHeight: "1",
        color: "white",
        //textShadow: "0px 7px 17px #e7dddd",
        [theme.breakpoints.down('md')]: {
            fontSize: "3em",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "2em",
            fontWeight: "500",
        },
    },

    colorText: {
        color: 'yellow',
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
            <div className={classes.image} >
                <h1 className={classes.introText}> Welcome, to Mon<span className={classes.colorText}>Movies</span> </h1>
            </div>
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
