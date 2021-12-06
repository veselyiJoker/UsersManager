import types from '../types.js';

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
        case types.SET_USERS:
            return {
                ...state,
                ...action.payload,
                isLoaded: true,
            }

        case types.ADD_USERS:
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.payload,
                ],
                isLoaded: true,
            }

        case types.UPDATE_USERS: 
            return {
                ...state,
                users: action.payload
            }

        case types.USERS_FETCHING:
            return {
                ...state,
                isLoaded: action.payload,
            }

        case types.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }
        
        case types.SET_TOTAL_PAGES: 
            return {
                ...state,
                totalPages: action.payload,
            }

        default:
            return state;
    }

}

export default usersReducer;