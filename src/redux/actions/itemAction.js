import axiosClient from '../../config/axios';
import {
    ADD_ITEMS,
    ADD_ITEMS_SUCCESSFUL,
    ADD_ITEMS_WRONG,
    SET_CURRENT_VALUES,
    ADD_DETAIL_ITEM,
    ADD_DETAIL_ITEM_SUCCESSFUL,
    ADD_DETAIL_ITEM_WRONG
} from '../types';

export const addItemsAction = (page, search) => {
    return async dispatch => {
        dispatch(addItems());
        try {
            const response = await axiosClient.get(`/item/list?page=${page}&search=${search}`)
            if (response.data === null)
                return dispatch(addItemsSuccessful(0));

            dispatch(addItemsSuccessful(response.data));
            dispatch(setCurrentValues({ page, search }));
        } catch (error) {
            console.log(error);
            dispatch(addItemsWrong());
        }
    }
};

const addItems = () => ({
    type: ADD_ITEMS
});

const addItemsSuccessful = items => ({
    type: ADD_ITEMS_SUCCESSFUL,
    payload: items
});

const addItemsWrong = () => ({
    type: ADD_ITEMS_WRONG
});

const setCurrentValues = currentValues => ({
    type: SET_CURRENT_VALUES,
    payload: currentValues
});

export const addDetailItemAction = id => {
    return async dispatch => {
        dispatch(addDetailItem());
        try {
            const response = await axiosClient.get(`/item/detail?id=${id}`)
            console.log(response.data)
            dispatch(addDetailItemSuccessful(response.data));
        } catch (error) {
            console.log(error);
            dispatch(addDetailItemWrong());
        }
    }
};

const addDetailItem = () => ({
    type: ADD_DETAIL_ITEM
});

const addDetailItemSuccessful = item => ({
    type: ADD_DETAIL_ITEM_SUCCESSFUL,
    payload: item
});

const addDetailItemWrong = () => ({
    type: ADD_DETAIL_ITEM_WRONG
});