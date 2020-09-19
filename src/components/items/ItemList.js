import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import ItemCard from './ItemCard';

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
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Container maxWidth="lg" className={classes.blogsContainer}>
            <Typography variant="h4" className={classes.blogTitle}>
                Articles
            </Typography>
            <Grid container spacing={3}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => <ItemCard />)
                }
            </Grid>
            <Box my={4} className={classes.paginationContainer}>
                <Pagination count={10} page={page} onChange={handleChange} />
            </Box>
        </Container>
    );
}

export default ItemList;