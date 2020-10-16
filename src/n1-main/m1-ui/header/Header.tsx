import React from 'react';
import {AppBar, IconButton, Toolbar, Typography, Box} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Menu} from '@material-ui/icons'
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        color: 'white',
        textDecoration: 'none',
        "&:hover, &:focus": {
            color: '#04324f'
        }
    },
});

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Menu/>
                </IconButton>
                <Box mr={1}>
                    <Typography variant="subtitle1">
                        <Link to="/" className={classes.root}>
                            Main
                        </Link>
                    </Typography>
                </Box>
                <Box mr={1}>
                    <Typography variant="subtitle1">
                        <Link to="/login" className={classes.root}>
                            Login
                        </Link>
                    </Typography>
                </Box>
                <Box mr={1}>
                    <Typography variant="subtitle1">
                        <Link to="/registration" className={classes.root}>
                            Registration
                        </Link>
                    </Typography>
                </Box>
                <Box mr={1}>
                    <Typography variant="subtitle1">
                        <Link to="/profile" className={classes.root}>
                            Profile
                        </Link>
                    </Typography>
                </Box>
                <Box mr={1}>
                    <Typography variant="subtitle1">
                        <Link to="/restore" className={classes.root}>
                            Restore password
                        </Link>
                    </Typography>
                </Box>
                <Typography variant="subtitle1">
                    <Link to="/update" className={classes.root}>
                        Update password
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
