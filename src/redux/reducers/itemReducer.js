import {
    ADD_ITEMS,
    ADD_ITEMS_SUCCESSFUL,
    ADD_ITEMS_WRONG,
    SET_CURRENT_VALUES,
    ADD_DETAIL_ITEM,
    ADD_DETAIL_ITEM_SUCCESSFUL,
    ADD_DETAIL_ITEM_WRONG
} from '../types';

const initialState = {
    items: [],
    totalPages: 1,
    currentPage: 1,
    currentSearch: '',
    loading: false,
    error: false,
    detailItem: {},
    detailLoading: false,
    detailError: false
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
                loading: false,
                error: false
            }
        case ADD_ITEMS_WRONG:
            return {
                ...state,
                loading: false,
                error: true
            }
        case SET_CURRENT_VALUES:
            return {
                ...state,
                currentPage: action.payload.page,
                currentSearch: action.payload.search,
            }
        case ADD_DETAIL_ITEM:
            return {
                ...state,
                detailLoading: true
            }
        case ADD_DETAIL_ITEM_SUCCESSFUL:
            return {
                ...state,
                detailItem: action.payload,
                detailLoading: false,
                detailError: false
            }
        case ADD_DETAIL_ITEM_WRONG:
            return {
                ...state,
                detailLoading: false,
                detailError: true
            }

        default:
            return state;
    }
}