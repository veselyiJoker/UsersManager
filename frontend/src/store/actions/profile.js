import { Types } from "../constants";

export const setProfile = (profile) => {
    return {
        type: Types.SET_PROFILE,
        payload: profile,
    }
}

export const setFirstNameText = (firstNameText) => {
    return {
        type: Types.SET_FIRST_NAME_TEXT,
        payload: firstNameText,
    }
}

export const setLastNameText = (lastNameText) => {
    return {
        type: Types.SET_LAST_NAME_TEXT,
        payload: lastNameText,
    }
}

export const setRedirectProfileToHomePage = (isRedirect) => {
    return {
        type: Types.SET_REDIRECT_PROFILE_TO_HOME_PAGE,
        payload: isRedirect,
    }
}
