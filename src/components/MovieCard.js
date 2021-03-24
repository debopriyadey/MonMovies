import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, IconButton } from '@material-ui/core';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


import { watchlater } from '../actions/index';
import { watched } from '../actions/index';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MovieCard({ movie }) {
    const classes = useStyles();
    const watchlistMovies =useSelector(state => state.watchlater)
    const watchedMovies =useSelector(state => state.watched)

    
    const dispatch = useDispatch()
    const handelWatchlater = (e) => {
        e.preventDefault();
        dispatch(watchlater(movie))
        console.log(watchlistMovies);
    }

    const handelWatched = (e) => {
        e.preventDefault();
        dispatch(watched(movie))
        console.log(watchedMovies);
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    title={movie.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {movie.title}
                    </Typography>
                    <small>{movie.release_date}</small>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {movie.overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                 <Button onClick={handelWatchlater} >{/* disabled={addedToWatchlater} */}
                    <IconButton aria-label="add to favorites">
                        <BookmarksOutlinedIcon />
                    </IconButton>
                </Button>
                 <Button onClick={handelWatched} >{/*disabled={addedToWatched} */}
                    <IconButton aria-label="share">
                        <VisibilityOffOutlinedIcon />
                    </IconButton>
                </Button>

            </CardActions>
        </Card>
    );
}