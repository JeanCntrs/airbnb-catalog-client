import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Header from '../Header';

const useStyles = makeStyles({
    site: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
    },
    typography: {
        flex: 1
        /* display: 'flex', */
        /*         justifyContent: 'center' */
    },
    header: {
        position: 'static'
    }
});

const MainLayout = ({ pageTitle, children }) => {
    const classes = useStyles();

    return (
        <div className={classes.site}>
            <Header title={pageTitle} />
            {children}
            <Typography className={classes.typography}>
                &copy; {new Date().getFullYear()} , made with
                icon by my
            </Typography>
        </div>
    );
}

export default MainLayout;