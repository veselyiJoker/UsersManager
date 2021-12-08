import { Types } from "../../constants.js"

export const fetchSetUsers = () => {
    return {
        type: Types.FETCH_SET_USERS,
    }
};

export const fetchAddUsers = (pageNumber) => {
    return {
        type: Types.FETCH_ADD_USERS,
        payload: pageNumber,
    }
}
