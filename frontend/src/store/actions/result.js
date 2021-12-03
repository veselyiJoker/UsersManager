import { 
    SET_RESULT_FETCHING, 
    SET_RESULT 
} from "../constants"

export const setResult = (result) => {
    return {
        type: SET_RESULT,
        payload: result,
    }
}

export const setResultFetching = (isFetching) => {
    return {
        type: SET_RESULT_FETCHING,
        payload: isFetching,
    }
}