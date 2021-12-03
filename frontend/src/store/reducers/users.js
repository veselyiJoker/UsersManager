import { ADD_USERS, SET_USERS, UPDATE_USERS } from '../constants.js';
import { USERS_FETCHING } from '../constants.js';
import { SET_CURRENT_PAGE } from '../constants.js';
import { SET_TOTAL_PAGES } from '../constants.js';

let initialState = {
    users: [],
    currentPage: null,
    itemsOnPage: null,
    totalItems: null,
    totalPages: null,
    isLoaded: false,
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                ...action.payload,
                isLoaded: true,
            }

        case ADD_USERS:
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.payload,
                ],
                isLoaded: true,
            }

        case UPDATE_USERS: 
            return {
                ...state,
                users: action.payload
            }

        case USERS_FETCHING:
            return {
                ...state,
                isLoaded: action.payload,
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }
        
        case SET_TOTAL_PAGES: 
            return {
                ...state,
                totalPages: action.payload,
            }

        default:
            return state;
    }

}

export default usersReducer;