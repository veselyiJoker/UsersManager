import types from "../types"

export const setResult = (result) => {
    return {
        type: types.SET_RESULT,
        payload: result,
    }
}

export const setResultFetching = (isLoaded) => {
    return {
        type: types.SET_RESULT_FETCHING,
        isLoaded: isLoaded,
    }
}

export const setRedirectResultToHomePage = (isRedirect) => {
    return {
        type: types.SET_REDIRECT_RESULT_TO_HOME_PAGE,
        payload: isRedirect,
    }
}