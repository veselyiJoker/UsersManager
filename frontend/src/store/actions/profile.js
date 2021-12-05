import {
    FETCH_UPDATE_PROFILE,
    SET_FETCH_ERROR,
    SET_FIRST_NAME_TEXT,
    SET_LAST_NAME_TEXT,
    SET_PROFILE,
    SET_REDIRECT_PROFILE_TO_HOME_PAGE,
    UPDATE_PROFILE,
} from "../constants";

export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        payload: profile,
    }
}

export const setFirstNameText = (firstNameText) => {
    return {
        type: SET_FIRST_NAME_TEXT,
        payload: firstNameText,
    }
}

export const setLastNameText = (lastNameText) => {
    return {
        type: SET_LAST_NAME_TEXT,
        payload: lastNameText,
    }
}

export const updateProfile = (updatedProfileData) => {
    return {
        type: UPDATE_PROFILE,
        payload: updatedProfileData,
    }
}

export const fetchUpdateProfile = (profileId) => {
    return {
        type: FETCH_UPDATE_PROFILE,
        payload: profileId,
    }
}

export const setRedirectProfileToHomePage = (isRedirect) => {
    return {
        type: SET_REDIRECT_PROFILE_TO_HOME_PAGE,
        payload: isRedirect,
    }
}

export const setFetchError = (error) => {
    return {
        type: SET_FETCH_ERROR,
        payload: error,
    }
}