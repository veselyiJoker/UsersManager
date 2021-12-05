import { SET_REDIRECT_RESULT_TO_HOME_PAGE, SET_RESULT } from "../constants";


let initialState = {
    firstName: '',
    lastName: '',
    updatedAt: '',
    isLoaded: false,
    redirectToHomePage: true,
}

const resultReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_RESULT:
            return {
                ...state,
                firstName: action.payload.first_name,
                lastName: action.payload.last_name,
                updatedAt: action.payload.updatedAt,
                isLoaded: true,
            }

        case SET_REDIRECT_RESULT_TO_HOME_PAGE:
            return {
                ...state,
                redirectToHomePage: action.payload,
            }
        default:
            return state;
    }

}

export default resultReducer;