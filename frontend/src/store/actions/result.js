import { 
    SET_REDIRECT_RESULT_TO_HOME_PAGE,
    SET_RESULT 
} from "../constants"

export const setResult = (result) => {
    return {
        type: SET_RESULT,
        payload: result,
    }
}

export const setRedirectResultToHomePage = (isRedirect) => {
    return {
        type: SET_REDIRECT_RESULT_TO_HOME_PAGE,
        payload: isRedirect,
    }
}