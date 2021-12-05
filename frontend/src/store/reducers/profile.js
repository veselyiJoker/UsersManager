import {
    FETCH_UPDATE_PROFILE,
    SET_REDIRECT_PROFILE_TO_HOME_PAGE,
    SET_FIRST_NAME_TEXT,
    SET_LAST_NAME_TEXT,
    SET_PROFILE,
    // UPDATE_PROFILE, 
} from "../constants"


const initialState = {
    profile: {
        _id: null,
        firstName: '',
        lastName: '',
        email: '',
        avatar: null,
        updatedAt: '',
        __v: null,
    },
    redirectToHomePage: true,
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload,
            }
        
        // case UPDATE_PROFILE: 
        //     return {
        //         ...state,
        //         profile: action.payload
        //     }

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

        case SET_REDIRECT_PROFILE_TO_HOME_PAGE:
            return {
                ...state,
                redirectToHomePage: action.payload
            }

        
        default:
            return state;
    }

}

export default profileReducer;