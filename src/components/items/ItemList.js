import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import ItemCard from './ItemCard';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

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

    const [search, setSearch] = useState('duplex');
    const [page, setPage] = useState(1);

    const handleSearchChange = event => {
        setSearch(event.target.value);
    }

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const addItems = (page, search) => dispatch(addItemsAction(page, search))

    useEffect(() => {
        addItems(page, search);
    }, [])

    return (
        <Container maxWidth="lg" className={classes.Container}>
            <Box className={classes.center}>
                <Paper component="form" className={classes.root}>
                    <IconButton className={classes.iconButton} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <InputBase
                        className={classes.input}
                        placeholder="Find your lodging"
                        inputProps={{ 'aria-label': 'Find your lodging' }}
                        onChange={handleSearchChange}
                    />
                    <IconButton className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>
            <Grid container spacing={3}>
                {
                    items && items.map(item => <ItemCard key={item._id} item={item} />)
                }
            </Grid>
            <Box my={4} className={classes.paginationContainer}>
                <Pagination count={10} page={page} onChange={handlePageChange} />
            </Box>
        </Container>
    );
}

export default ItemList;