import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from '../assets/img/svg/logo-airbnb.svg';

const useStyles = makeStyles({
    appBar: {
        backgroundColor: '#fff',
        position:'relative'
    },
    toolBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

const Header = ({ title }) => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Typography variant="h5" color="primary">{title}</Typography>
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;