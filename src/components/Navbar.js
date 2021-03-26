import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Button, Badge } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: "none",
        flexGrow: '1',
    },

    appbar: {
        
        backgroundColor: '#232423',
        opacity: '0.9',
        [theme.breakpoints.down('xs')]: {
            height: '5%',
        },
    },

    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
        justifyContent: "space-between",

    },

    appbarTitle: {
        flexGrow: '1',
        [theme.breakpoints.down('xs')]: {
            marginTop: "0",
            fontSize: '15px'
        }
    },

    icon: {
        color: '#fff',
        fontSize: '1.5rem',
    },

    iconSize: {
        [theme.breakpoints.down('xs')]: {
            marginTop: "0",
            fontSize: '8px'
        }
    },

    button: {
        margin: theme.spacing(1),
    },

    colorText: {
        color: 'yellow',
    },

    container: {
        textAlign: 'center',
    },

}));

export default function Navbar() {
    const classes = useStyles();

    const watchlaterMovies = useSelector(state => state.watchlater)
    const watchedMovies = useSelector(state => state.watched)

    const watchlaterLength = watchlaterMovies.length
    const watchedLength = watchedMovies.length

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0} >
                <Toolbar className={classes.appbarWrapper}>
                    <Link to="/MonMovies" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h1 className={classes.appbarTitle}>
                            Mon<span className={classes.colorText}>Movies</span>
                        </h1>
                    </Link>
                    <IconButton>
                        <Link to="/MonMovies/watchlater" className={classes.icon} style={{ textDecoration: 'none' }}>
                            <Button varient="contained" color="secondary" size="small">
                                <h3 className={classes.iconSize}>
                                    <Badge badgeContent={watchlaterLength} color="primary">
                                        Watchlater
                                    </Badge>
                                </h3>
                            </Button>
                        </Link>,
                        <Link to="/MonMovies/watched" className={classes.icon} style={{ textDecoration: 'none' }}>
                            <Button varient="contained" color="secondary" size="small">
                                <h3 className={classes.iconSize}>
                                    <Badge badgeContent={watchedLength} color="primary">
                                        Watched
                                    </Badge>
                                </h3>
                            </Button>
                        </Link>
                        <Link to="/MonMovies/search" className={classes.icon} style={{ textDecoration: 'none' }}>
                            <Button varient="contained" color="secondary" size="small">
                                <h3 className={classes.iconSize}>
                                    <Search />
                                </h3>
                            </Button>
                        </Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
