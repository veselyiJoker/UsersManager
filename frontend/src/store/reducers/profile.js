import { Types } from "../constants.js"

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
    isRedirectToHomePage: true,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case Types.SET_PROFILE:
            return {
                ...state,
                profile: action.payload,
            }
        
        case Types.FETCH_UPDATE_PROFILE: 
            return {
                ...state,
                profile: action.payload
            }

        case Types.SET_FIRST_NAME_TEXT:
            return {
                ...state,
                firstNameText: action.payload,
            }

        case Types.SET_LAST_NAME_TEXT:
            return {
                ...state,
                lastNameText: action.payload,
            }

        case Types.SET_REDIRECT_PROFILE_TO_HOME_PAGE:
            return {
                ...state,
                isRedirectToHomePage: action.payload
            }
        
        default:
            return state;
    }

}

export default profileReducer;