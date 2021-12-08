import { Types } from "../constants.js";

let initialState = {
    firstName: '',
    lastName: '',
    updatedAt: '',
    isLoaded: false,
    isRedirectToHomePage: true,
}

const resultReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case Types.SET_RESULT:
            return {
                ...state,
                firstName: action.payload.first_name,
                lastName: action.payload.last_name,
                updatedAt: action.payload.updatedAt,
                isLoaded: true,
            }

        case Types.SET_RESULT_FETCHING: 
            return {
                ...state,
                isLoaded: action.payload,
            }

        case Types.SET_REDIRECT_RESULT_TO_HOME_PAGE:
            return {
                ...state,
                isRedirectToHomePage: action.payload,
            }
        default:
            return state;
    }

}

export default resultReducer;