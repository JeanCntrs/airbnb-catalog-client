import {
    ADD_ITEMS,
    ADD_ITEMS_SUCCESSFUL,
    ADD_ITEMS_WRONG
} from '../types';

const initialState = {
    items: [],
    error: false,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_ITEMS:
            return {
                ...state,
                loading: true
            }
        case ADD_ITEMS_SUCCESSFUL:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case ADD_ITEMS_WRONG:
            return {
                ...state,
                error: true,
                loading: false
            }

        default:
            return state;
    }
}