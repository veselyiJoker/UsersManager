import types from "../types";

export const setProfile = (profile) => {
    return {
        type: types.SET_PROFILE,
        payload: profile,
    }
}

export const setFirstNameText = (firstNameText) => {
    return {
        type: types.SET_FIRST_NAME_TEXT,
        payload: firstNameText,
    }
}

export const setLastNameText = (lastNameText) => {
    return {
        type: types.SET_LAST_NAME_TEXT,
        payload: lastNameText,
    }
}

export const fetchUpdateProfile = (profileId) => {
    return {
        type: types.FETCH_UPDATE_PROFILE,
        payload: profileId,
    }
}

export const setRedirectProfileToHomePage = (isRedirect) => {
    return {
        type: types.SET_REDIRECT_PROFILE_TO_HOME_PAGE,
        payload: isRedirect,
    }
}
