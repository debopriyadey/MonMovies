import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';



import { watchlater, deletewatchlater, deletewatched } from '../actions/index';
import { watched } from '../actions/index';
import { currentmovie } from '../actions/index';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles({
    root: {
        minWidth: 290,
        maxWidth: 291,
    },
    media: {
        height: 300,
    },
    title: {
        minHeight: 65,
    },
    // desc: {
    //     //minheight: 345,
    //     height: 145,
    //     overflowY: "overlay",
    // },
    infoButton: {
        marginLeft: 'auto',
    }
});

export default function MovieCard({ movie }) {
    const classes = useStyles();

    const dispatch = useDispatch()
    const history = useHistory()

    const renderButtonWatchlater = () => {
        var savedMovies = JSON.parse(localStorage.getItem("Watchlater")) === null ? [] : JSON.parse(localStorage.getItem("Watchlater"));
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
            return [
                <IconButton aria-label="add to favorites" onClick={handelWatchlater}>
                    <BookmarksOutlinedIcon />
                </IconButton>
            ]

        } else {
            return [
                <IconButton onClick={handelDeleteWatchlater}>
                    <DeleteIcon />
                </IconButton>
            ]
        }
    }

    const renderButtonWatched = () => {
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
            return [
                <IconButton aria-label="share" onClick={handelWatched}>
                    <VisibilityOffOutlinedIcon />
                </IconButton>
            ]
        } else {
            return [
                <IconButton onClick={handelDeleteWatched}>
                    <DeleteIcon />
                </IconButton>
            ]
        }
    }

    const handelWatchlater = (e) => {
        e.preventDefault();
        dispatch(watchlater(movie))
        window.location.reload();

    }

    const handelWatched = (e) => {
        e.preventDefault();
        dispatch(watched(movie))
        window.location.reload();

    }

    const handelDeleteWatched = (e) => {
        e.preventDefault();
        dispatch(deletewatched(movie));
        window.location.reload();
    }

    const handelDeleteWatchlater = (e) => {
        e.preventDefault();
        dispatch(deletewatchlater(movie));
        window.location.reload();
    }

    const handelDetail = (e) => {
        e.preventDefault();

        dispatch(currentmovie(movie))
        history.push(`/MonMovies/currentmovie/${movie.id}`);
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    title={movie.title}
                />
                <BorderLinearProgress variant="determinate" value={movie.vote_average*10} style={{marginLeft: '-5px'}}/>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {movie.title}
                    </Typography>
                    <small>{movie.release_date}</small>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                {renderButtonWatchlater()}
                {renderButtonWatched()}
                <IconButton aria-label="share" onClick={handelDetail} className={classes.infoButton}>
                    <InfoIcon />
                </IconButton>

            </CardActions>
        </Card>
    );
}