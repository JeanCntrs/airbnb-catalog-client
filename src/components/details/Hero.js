import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    hero: {
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
            fontSize: '2.5rem'
        }
    }
}));

const Hero = ({ item }) => {
    const classes = useStyles();

    return (
        <Box className={classes.hero} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${item.Images.picture_url}')` }}>
            <Box>{item.name}</Box>
        </Box>
    );
}

export default Hero;