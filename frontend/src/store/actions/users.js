import types from "../types.js"


export const setUsers = (users) => {
    return {
        type: types.SET_USERS,
        payload: users,
    }
}

export const fetchSetUsers = () => {
    return {
        type: types.FETCH_SET_USERS,
    }
};


export const addUsers = (users) => {
    return {
        type: types.ADD_USERS,
        payload: users,
    }
}

export const updateUsers = (users) => {
    return {
        type: types.UPDATE_USERS,
        payload: users,
    }
}

export const fetchAddUsers = (pageNumber) => {
    return {
        type: types.FETCH_ADD_USERS,
        payload: pageNumber,
    }
}


export const usersFetching = (isLoaded) => {
    return {
        type: types.USERS_FETCHING,
        payload: isLoaded,
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: types.SET_CURRENT_PAGE,
        payload: currentPage,
    }
}

export const setTotalPages = (totalPages) => {
    return {
        type: types.SET_TOTAL_PAGES,
        payload: totalPages,
    }
}

