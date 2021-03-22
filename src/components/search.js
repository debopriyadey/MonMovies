import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


import Navbar from './Navbar';
import MovieCard from './MovieCard';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    margin: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '18%',
    },

}));

export default function Main() {
    const classes = useStyles();

    const [query, setQuery] = useState({
        movie: ""
    });

    const [results, setResults] = useState([]);

    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=620bcff5c65556bbc5abc99f82b7164a&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            });
    };

    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.margin}>
                <Grid container spacing={2} alignItems="flex-end">
                    <Grid item>
                        <SearchIcon />
                    </Grid>
                    <Grid item>
                        <TextField
                            name="query"
                            variant="outlined"
                            autoComplete="query"
                            id="query"
                            placeholder="Search the movie"
                            value={query.movie}
                            onChange={onChange}
                        />
                    </Grid>
                </Grid>
            </div>
            <div>
                {results.length > 0 && ( results.map((movie) => (
                        <Grid key={movie.id}>
                            <MovieCard movie={movie} />
                        </Grid>
                    ))
                )}
            </div>
        </div>
    )
}
