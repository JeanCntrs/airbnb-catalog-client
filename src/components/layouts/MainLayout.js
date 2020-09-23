import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';

const useStyles = makeStyles({
    site: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
    }
});

const MainLayout = ({ pageTitle, children }) => {
    const classes = useStyles();

    return (
        <div className={classes.site}>
            <Header title={pageTitle} />
            {children}
        </div>
    );
}

export default MainLayout;