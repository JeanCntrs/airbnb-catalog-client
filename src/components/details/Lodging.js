import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Hero from './Hero';
import Body from './Body';
import Error from '../Error';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addDetailItemAction } from '../../redux/actions/itemAction';

const useStyles = makeStyles({
    loading: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 100
    }
});

const Lodging = ({ match: { params: { id } } }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const detailItem = useSelector(state => state.itemsState.detailItem);
    const detailLoading = useSelector(state => state.itemsState.detailLoading);
    const detailError = useSelector(state => state.itemsState.detailError);

    const addDetailItem = id => dispatch(addDetailItemAction(id));

    useEffect(() => {
        addDetailItem(id);
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {
                detailError
                    ? <Error code='404' />
                    : <>
                        {
                            !detailLoading && detailItem._id
                                ? <>
                                    <Hero item={detailItem} />
                                    <Body item={detailItem} />
                                </>
                                : <Typography variant="h5" color="textSecondary" className={classes.loading}>
                                    Loading...
                                </Typography>

                        }
                    </>
            }
        </>
    );
}

export default withRouter(Lodging);