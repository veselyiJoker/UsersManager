import { 
    SET_USERS, 
    SET_CURRENT_PAGE, 
    SET_TOTAL_PAGES, 
    ADD_USERS,
    FETCH_SET_USERS,
    FETCH_ADD_USERS,
    USERS_FETCHING,
    UPDATE_USERS
} from "../constants.js"


export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users,
    }
}

export const fetchSetUsers = () => {
    return {
        type: FETCH_SET_USERS,
    }
};


export const addUsers = (users) => {
    return {
        type: ADD_USERS,
        payload: users,
    }
}

export const updateUsers = (users) => {
    return {
        type: UPDATE_USERS,
        payload: users,
    }
}

export const fetchAddUsers = (pageNumber) => {
    return {
        type: FETCH_ADD_USERS,
        payload: pageNumber,
    }
}


export const usersFetching = (isLoaded) => {
    return {
        type: USERS_FETCHING,
        payload: isLoaded,
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: currentPage,
    }
}

export const setTotalPages = (totalPages) => {
    return {
        type: SET_TOTAL_PAGES,
        payload: totalPages,
    }
}

