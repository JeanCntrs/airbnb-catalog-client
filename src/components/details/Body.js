import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
    gridButton: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 56,
        marginBottom: 56
    },
    link: {
        textDecoration: 'none'
    },
    boxDescription: {
        marginTop: 25,
        marginBottom: 50,
        marginLeft: 50,
        marginRight: 50,
        padding: 50,
        borderStyle: 'outset',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            marginRight: 0
        }
    },
    gridRating: {
        display: 'flex',
        justifyContent: 'center'
    },
    descriptionText: {
        textAlign: 'justify'
    },
    ratingText: {
        textAlign: 'center'
    }
}));

const Body = ({ item }) => {
    console.log(item)
    const classes = useStyles();
    const num = Math.round(Math.random() * (5 - 3) + 3);
    console.log(num)

    return (
        <Container maxWidth="lg" >
            <Grid container>
                <Grid item xs={12} className={classes.gridButton}>
                    <Link to="/" className={classes.link}>
                        <Button variant="outlined" color="primary">
                            Go Back
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} className={classes.gridRating}>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend" className={classes.ratingText}>Guest Rating</Typography>
                        <Rating name="read-only" value={num} readOnly />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4">
                        Description
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.boxDescription}>
                        <Typography variant="h6" color="textSecondary" className={classes.descriptionText}>
                            {item?.description}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Body;