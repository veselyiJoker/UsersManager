import axios from "axios";
import { put, takeEvery, call, select} from "redux-saga/effects"
import { FETCH_UPDATE_PROFILE } from "../constants";
import * as selectors from '../selectors/selectors';
import { updateUsers } from "../actions/users";
import { setResult } from "../actions/result";

const baseURL = 'http://localhost:3000/';

const fetchUpdateProfile = (updatedProfileData) => axios ({
    method: "put",
    url: baseURL + "api/users",
    data: {
        _id: updatedProfileData._id,
        first_name: updatedProfileData.first_name,
        last_name: updatedProfileData.last_name,
    }
});

function* updateProfileWorker(action) {
    const users = yield select(selectors.users);
    const response = yield call(fetchUpdateProfile, action.payload);

    yield put(setResult(response.data))
    yield put(updateUsers(
        users.map(
            elem => elem._id === response.data._id 
            ? { 
                ...elem,
                firstName: response.data.first_name,
                lastName: response.data.last_name
              } 
            : elem
        )
    ))
}

export function* profileWatcher() {
    yield takeEvery(FETCH_UPDATE_PROFILE, updateProfileWorker)
}

