import {
    FETCH_UPDATE_PROFILE,
    SET_FETCH_ERROR,
    SET_FIRST_NAME_TEXT,
    SET_LAST_NAME_TEXT,
    SET_PROFILE,
    UPDATE_PROFILE, 
} from "../constants"


const initialState = {
    profile: {
        _id: null,
        firstName: null,
        lastName: null,
        email: null,
        avatar: null,
        updatedAt: null,
        __v: null,
    },
    firstNameText: '',
    lastNameText: '',
    isFetchError: false,
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                firstNameText: action.payload.firstName,
                lastNameText: action.payload.lastName,
            }
        
        case UPDATE_PROFILE: 
            return {
                ...state,
                profile: action.payload
            }

        case FETCH_UPDATE_PROFILE: 
            return {
                ...state,
                profile: action.payload
            }

        case SET_FIRST_NAME_TEXT:
            return {
                ...state,
                firstNameText: action.payload,
            }

        case SET_LAST_NAME_TEXT:
            return {
                ...state,
                lastNameText: action.payload,
            }
        
        case SET_FETCH_ERROR:
            return {
                ...state,
                isFetchError: action.payload,
            }

        
        default:
            return state;
    }

}

export default profileReducer;