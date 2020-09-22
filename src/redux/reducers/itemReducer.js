import {
    ADD_ITEMS,
    ADD_ITEMS_SUCCESSFUL,
    ADD_ITEMS_WRONG,
    SET_CURRENT_PAGE
} from '../types';

const initialState = {
    items: [],
    totalPages: 1,
    currentPage: 1,
    loading: false,
    error: false,
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
                totalPages: action.payload[0]?.pages,
                loading: false
            }
        case ADD_ITEMS_WRONG:
            return {
                ...state,
                error: true,
                loading: false
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        default:
            return state;
    }
}