import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import error404 from '../assets/img/jpg/errors/error-404.jpg';
import error503 from '../assets/img/jpg/errors/error-503.jpg';

const useStyles = makeStyles({
    img: {
        width: '100%'
    }
});

const Error = ({ code }) => {
    const classes = useStyles();

    return (
        <Box>
            {code === '404' && <img src={error404} className={classes.img} alt="Error 404" />}
            {code === '503' && <img src={error503} className={classes.img} alt="Error 503" />}
        </Box>
    );
}

export default Error;