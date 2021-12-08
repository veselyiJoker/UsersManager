import { Types } from "../constants"

export const setResult = (result) => {
    return {
        type: Types.SET_RESULT,
        payload: result,
    }
}

export const setResultFetching = (isLoaded) => {
    return {
        type: Types.SET_RESULT_FETCHING,
        isLoaded: isLoaded,
    }
}

export const setRedirectResultToHomePage = (isRedirect) => {
    return {
        type: Types.SET_REDIRECT_RESULT_TO_HOME_PAGE,
        payload: isRedirect,
    }
}