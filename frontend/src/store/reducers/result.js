import { SET_RESULT, SET_RESULT_FETCHING } from "../constants";


let initialState = {
    firstName: null,
    lastName: null,
    updatedAt: null,
    isFetching: false,
}

const resultReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_RESULT:
            return {
                ...state,
                firstName: action.payload.first_name,
                lastName: action.payload.last_name,
                updatedAt: action.payload.updatedAt,
                isFetching: true,
            }

        case SET_RESULT_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }
                
        
        default:
            return state;
    }

}

export default resultReducer;