import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import ItemCard from './ItemCard';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addItemsAction } from '../../redux/actions/itemAction';

const useStyles = makeStyles(theme => ({
    blogsContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    paginationContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const ItemList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const items = useSelector(state => state.itemsState.items);
    console.log(items)

    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const addItems = () => dispatch(addItemsAction())

    useEffect(() => {
        addItems();
    }, [])

    return (
        <Container maxWidth="lg" className={classes.blogsContainer}>
            <Typography variant="h4" className={classes.blogTitle}>
                Articles
            </Typography>
            <Grid container spacing={3}>
                {
                    items && items.map(item => <ItemCard key={item._id} item={item} />)
                }
            </Grid>
            <Box my={4} className={classes.paginationContainer}>
                <Pagination count={10} page={page} onChange={handleChange} />
            </Box>
        </Container>
    );
}

export default ItemList;