import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import MainLayout from '../components/layouts/MainLayout';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
        height: '500px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '4rem',
        [theme.breakpoints.down('sm')]: {
            height: 300,
            fontSize: '3rem'
        }
    }
}));

const ItemDetail = () => {
    const classes = useStyles();

    return (
        <MainLayout pageTitle="Item Detail">
            <Box className={classes.hero}>
                <Box>React Blog</Box>
            </Box>
        </MainLayout>
    );
}

export default ItemDetail;