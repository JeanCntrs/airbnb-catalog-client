import axiosClient from '../../config/axios';
import {
    ADD_ITEMS,
    ADD_ITEMS_SUCCESSFUL,
    ADD_ITEMS_WRONG
} from '../types';

export const addItemsAction = (page, search) => {
    return async dispatch => {
        dispatch(addItems());
        try {
            const response = await axiosClient.get(`/item/list?page=${page}&search=${search}`)
            console.log(response.data)
            dispatch(addItemsSuccessful(response.data))
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