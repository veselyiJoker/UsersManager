import { Types } from '../constants.js';

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
        case Types.SET_USERS:
            return {
                ...state,
                ...action.payload,
                isLoaded: true,
            }

        case Types.ADD_USERS:
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.payload,
                ],
                isLoaded: true,
            }

        case Types.UPDATE_USERS: 
            return {
                ...state,
                users: action.payload
            }

        case Types.USERS_FETCHING:
            return {
                ...state,
                isLoaded: action.payload,
            }

        case Types.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }
        
        case Types.SET_TOTAL_PAGES: 
            return {
                ...state,
                totalPages: action.payload,
            }

        default:
            return state;
    }

}

export default usersReducer;