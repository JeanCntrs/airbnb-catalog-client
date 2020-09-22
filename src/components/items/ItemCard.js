import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Star, BookmarkBorder } from '@material-ui/icons';
import {
    Grid,
    Card,
    CardActionArea,
    CardHeader,
    CardActions,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Avatar,
    Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import avatars from '../../utils/avatars';
import moment from 'moment';

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
    },
    title: {
        fontSize: '1.1rem'
    },
    date: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    center: {
        textAlign: 'center'
    },
    link: {
        textDecoration: 'none'
    }
});

const ItemCard = ({ item }) => {
    const classes = useStyles();
    const num = Math.floor((Math.random() * avatars.length - 1) + 1);

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardHeader classes={{ title: classes.title }}
                        action={<Star style={{ color: 'yellow', fontSize: 30 }} />}
                        title={item.name}
                        subheader={item.property_type}
                    />
                    <CardMedia
                        className={classes.media}
                        image={item.Images.picture_url}
                        title={item.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.Address.street} {item.Address.country}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {
                                item.summary
                                    ? item.summary.length > 256
                                        ? `${item.summary.substr(0, 256)}...`
                                        : item.summary
                                    : 'No summary.'
                            }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                        {
                            item.Reviews.length > 0 ? <Avatar src={avatars[num].imageUrl} /> : <Avatar />
                        }
                        <Box ml={2}>
                            <Typography variant="subtitle2" component="p">
                                {
                                    item.Reviews.length > 0
                                        ? <>{item.Reviews[0].reviewer_name}<span className={classes.date}> {moment(item.Reviews[0].date).format("MMM Do YY")}</span></>
                                        : 'No reviews'
                                }
                            </Typography>
                            <Typography variant="body2" component="p" color="textSecondary">
                                {
                                    item.Reviews.length > 0 &&
                                        item.Reviews[0]?.comments.length > 38 ? `${item.Reviews[0].comments.substr(0, 38)}...` : item.Reviews[0]?.comments
                                }
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <BookmarkBorder />
                    </Box>
                </CardActions>
                <Box className={classes.center}>
                    <Link to={`/item/detail/${item._id}`} className={classes.link}>
                        <Button size="small" color="primary">See More</Button>
                    </Link>
                </Box>
            </Card>
        </Grid>
    );
}

export default ItemCard;