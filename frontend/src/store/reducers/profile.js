import types from "../types"

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
        case types.SET_PROFILE:
            return {
                ...state,
                profile: action.payload,
            }
        
        case types.FETCH_UPDATE_PROFILE: 
            return {
                ...state,
                profile: action.payload
            }

        case types.SET_FIRST_NAME_TEXT:
            return {
                ...state,
                firstNameText: action.payload,
            }

        case types.SET_LAST_NAME_TEXT:
            return {
                ...state,
                lastNameText: action.payload,
            }

        case types.SET_REDIRECT_PROFILE_TO_HOME_PAGE:
            return {
                ...state,
                redirectToHomePage: action.payload
            }
        
        default:
            return state;
    }

}

export default profileReducer;