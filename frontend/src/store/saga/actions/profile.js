import { Types } from "../../constants.js";

export const fetchUpdateProfile = (profileId) => {
    return {
        type: Types.FETCH_UPDATE_PROFILE,
        payload: profileId,
    }
}

