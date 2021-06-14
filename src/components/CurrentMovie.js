import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import './card.css';

import { watchlater, watched, deletewatchlater, deletewatched } from '../actions/index';
import Navbar from './Navbar';

const useStyles = makeStyles({
    root: {
        color: "white",
    },
    main: {
        marginTop: "5%",
    },
    media: {

    },
    title: {

    },
    desc: {

    },

});

export default function CurrentMovie() {
    const classes = useStyles();
    const movie = JSON.parse(sessionStorage.getItem("currentmovie"));

    const dispatch = useDispatch()
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
                <BookmarksOutlinedIcon onClick={handelWatchlater} />
            ]

        } else {
            return [
                <DeleteIcon onClick={handelDeleteWatchlater} />
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
                <VisibilityOffOutlinedIcon onClick={handelWatched} />
            ]
        } else {
            return [
                <DeleteIcon onClick={handelDeleteWatched} />
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

    return (
        <Container className={classes.root}>
            <Navbar />
            <div className="dark">
                <main className="container py-4">
                    <div className="h1 text-center" id="pageHeaderTitle"></div>
                    <article className="postcard dark blue">
                        <img className="postcard__img" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                        <div className="postcard__text">
                            <h1 className="postcard__title blue">{movie.title} </h1>
                            <div className="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>{movie.release_date}</time>
                            </div>
                            <div className="postcard__bar"></div>

                            <div className="" style={{ fontSize: '1.4rem' }}>Language: {movie.original_language} </div>
                            <div className="" style={{ fontSize: '1.5rem' }}>Vote Count: {movie.vote_count}  </div>
                            <div className="" style={{ fontSize: '1.4rem' }}>Popularity: {movie.popularity} </div>
                            <br />
                            <div className="postcard__preview-txt">{movie.overview}</div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item"><i className="fas fa-tag mr-2"></i>
                                    {renderButtonWatchlater()}
                                </li>
                                <li className="tag__item"><i className="fas fa-clock mr-2"></i>
                                    {renderButtonWatched()}
                                </li>
                            </ul>
                        </div>
                    </article>

                </main>
            </div>
        </Container>
    );
}