import axiosClient from '../../config/axios';
import {
    ADD_ITEMS,
    ADD_ITEMS_SUCCESSFUL,
    ADD_ITEMS_WRONG,
    SET_CURRENT_PAGE
} from '../types';

export const addItemsAction = (page, search) => {
    return async dispatch => {
        dispatch(addItems());
        try {
            const response = await axiosClient.get(`/item/list?page=${page}&search=${search}`)
            if (response.data === null)
                return dispatch(addItemsSuccessful(0));

            dispatch(addItemsSuccessful(response.data));
            dispatch(setCurrentPage(page));
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

const setCurrentPage = currentPage => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage
});