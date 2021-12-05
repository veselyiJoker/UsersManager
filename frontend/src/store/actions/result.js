import { 
    SET_RESULT, 
    SET_RESULT_FETCHING,
    SET_REDIRECT_RESULT_TO_HOME_PAGE,
} from "../constants"

export const setResult = (result) => {
    return {
        type: SET_RESULT,
        payload: result,
    }
}

export const setResultFetching = (isLoaded) => {
    return {
        type: SET_RESULT_FETCHING,
        isLoaded: isLoaded,
    }
}

export const setRedirectResultToHomePage = (isRedirect) => {
    return {
        type: SET_REDIRECT_RESULT_TO_HOME_PAGE,
        payload: isRedirect,
    }
}