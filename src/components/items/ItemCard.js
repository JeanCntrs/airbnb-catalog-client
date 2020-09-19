import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BookmarkBorder } from '@material-ui/icons';
import {
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Avatar
} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: '100%'
    },
    media: {
        height: 240
    },
    cardActions: {
        display: 'flex',
        margin: '0 10px',
        justifyContent: 'space-between'
    },
    author: {
        display: 'flex'
    }
});

const ItemCard = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            React useContext
                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                        <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <Box ml={2}>
                            <Typography variant="subtitle2" component="p">
                                Guy clemons
                        </Typography>
                            <Typography variant="subtitle2" component="p" color="textSecondary">
                                May 14, 2020
                        </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <BookmarkBorder />
                    </Box>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default ItemCard;