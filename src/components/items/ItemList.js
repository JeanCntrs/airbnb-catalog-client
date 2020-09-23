import React, { useState, useEffect, useCallback } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { makeStyles } from '@material-ui/core/styles';
import { CardLoader } from '../../utils/loaders';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import ItemCard from './ItemCard';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Error from '../Error';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addItemsAction } from '../../redux/actions/itemAction';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        marginTop: 50,
        marginBottom: 55
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    Container: {
        paddingTop: theme.spacing(3)
    },
    paginationContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const ItemList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const items = useSelector(state => state.itemsState.items);
    const totalPages = useSelector(state => state.itemsState.totalPages);
    const currentPage = useSelector(state => state.itemsState.currentPage);
    const currentSearch = useSelector(state => state.itemsState.currentSearch);
    const loading = useSelector(state => state.itemsState.loading);
    const error = useSelector(state => state.itemsState.error);

    const [params, setParams] = useState({ page: currentPage, search: currentSearch });
    console.log(params)
    console.log(items)

    const debounced = useDebouncedCallback(
        useCallback((value) => {
            setParams({ page: 1, search: value });
        }, []),
        700,
        // The maximum time func is allowed to be delayed before it's invoked
        { maxWait: 2000 }
    );

    const handlePageChange = (event, value) => {
        setParams({ ...params, page: value });
    };

    const addItems = (page, search) => dispatch(addItemsAction(page, search))

    useEffect(() => {
        addItems(params.page, params.search);
        // eslint-disable-next-line
    }, [params])

    return (
        <Container maxWidth="lg" className={classes.Container}>
            {
                error
                    ? <Error code='503' />
                    : <>
                        <Box className={classes.center}>
                            <Paper component="form" className={classes.root}>
                                <IconButton className={classes.iconButton} aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Find your lodging"
                                    inputProps={{ 'aria-label': 'Find your lodging' }}
                                    defaultValue={params.search}
                                    onChange={event => debounced.callback(event.target.value)}
                                />
                                <IconButton className={classes.iconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </Box>
                        {
                            items === 0
                                ? <Typography variant="h5" color="textSecondary" className={classes.center}>
                                    No information found.
                                </Typography>
                                : <>
                                    <Grid container spacing={3}>
                                        {
                                            items.length > 0 && !loading
                                                ? items.map(item => <ItemCard key={item._id} item={item} />)
                                                : [1].map(() => <CardLoader />)
                                        }
                                    </Grid>
                                    {
                                        items.length > 0 && !loading &&
                                        <Box my={4} className={classes.paginationContainer}>
                                            <Pagination count={totalPages} page={params.page} onChange={handlePageChange} />
                                        </Box>
                                    }
                                </>
                        }
                    </>
            }
        </Container>
    );
}

export default ItemList;