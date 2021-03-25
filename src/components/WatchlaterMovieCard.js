import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, IconButton } from '@material-ui/core';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import { watched } from '../actions/index';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function WatchlaterMovieCard({ movie }) {
    const classes = useStyles();
    //const watchlaterMovies = useSelector(state => state.watchlater)
    //const watchedMovies = useSelector(state => state.watched)

    const dispatch = useDispatch()

    const handelWatched = (e) => {
        var savedMovies = JSON.parse(localStorage.getItem("Watched")) === null ? [] : JSON.parse(localStorage.getItem("Watched"));
        var flag = true;
        for (let user of savedMovies) {
            if (user.id === movie.id) {
                console.log("present");
                flag = false;
                break;
            } else {
                continue;
            }
        }
        if (flag) {
            e.preventDefault();
            dispatch(watched(movie))

        } else {
            alert("movie already added into watched");
        }
    }

    const handelDeleteWatchlater = (e) => {
        e.preventDefault();
        console.log("working");
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
            <CardActions disableSpacing>
                <Button title="delete from watchlater" onClick={handelDeleteWatchlater}>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Button>
                <Button title="add to watched" onClick={handelWatched} >{/* disabled={addedToWatchlater} */}
                    <IconButton aria-label="add to favorites">
                        <VisibilityOffOutlinedIcon />
                    </IconButton>
                </Button>
                
            </CardActions>
        </Card>
    );
}