import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';
import Search from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: "none",
        flexGrow: '1'

    },

    appbar: {
        backgroundColor: '#232423',
        opacity: '0.7',
    },

    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
        justifyContent: "space-between",

    },

    appbarTitle: {
        flexGrow: '1',
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px'
        }
    },

    icon: {
        color: '#fff',
        fontSize: '1.5rem',
        padding: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px'
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

    title: {
        color: '#fff',
        fontSize: '4.5rem',
        fontFamily: 'Lemonada',
        [theme.breakpoints.down('xs')]: {
            fontSize: '30px'
        }
    },

    subtitle: {
        fontSize: '4rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '27px'
        }
    },

    goDown: {
        color: '#295ed9',
        fontSize: '3.6rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '40px'
        }
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0} >
                <Toolbar className={classes.appbarWrapper}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h1 className={classes.appbarTitle}>
                            Mon-<span className={classes.colorText}>Movies</span>
                        </h1>
                    </Link>
                    <IconButton>
                        <Link to="/wishlist" className={classes.icon} style={{ textDecoration: 'none' }}>
                            <Button varient="contained" color="secondary" size="small">
                                Wishlist
                            </Button>
                        </Link>,
                        <Link to="/watched" className={classes.icon} style={{ textDecoration: 'none' }}>
                            <Button varient="contained" color="secondary" size="small">
                                Watched
                            </Button>
                        </Link>
                        <Link to="/search" className={classes.icon} style={{ textDecoration: 'none' }}>
                            <Button varient="contained" color="secondary" size="small">
                                <Search />
                            </Button>
                        </Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
