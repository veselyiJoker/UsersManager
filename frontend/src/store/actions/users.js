import { Types } from "../constants.js"


export const setUsers = (users) => {
    return {
        type: Types.SET_USERS,
        payload: users,
    }
}

export const addUsers = (users) => {
    return {
        type: Types.ADD_USERS,
        payload: users,
    }
}

export const updateUsers = (users) => {
    return {
        type: Types.UPDATE_USERS,
        payload: users,
    }
}

export const usersFetching = (isLoaded) => {
    return {
        type: Types.USERS_FETCHING,
        payload: isLoaded,
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: Types.SET_CURRENT_PAGE,
        payload: currentPage,
    }
}

export const setTotalPages = (totalPages) => {
    return {
        type: Types.SET_TOTAL_PAGES,
        payload: totalPages,
    }
}

