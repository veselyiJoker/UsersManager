import axios from "axios";
import { put, takeEvery, call, select} from "redux-saga/effects"
import { baseURL, Types } from "../constants";
import * as selectors from '../selectors/selectors';
import { updateUsers } from "../actions/users";
import { setResult } from "../actions/result";

const fetchUpdateProfile = (updatedProfileData) => axios ({
    method: "put",
    url: baseURL + "api/users",
    data: {
        _id: updatedProfileData._id,
        first_name: updatedProfileData.first_name,
        last_name: updatedProfileData.last_name,
        updatedAt: updatedProfileData.updatedAt,
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
                lastName: response.data.last_name,
                updatedAt: response.data.updatedAt,
              } 
            : elem
        )
    ))

}

export function* profileWatcher() {
    yield takeEvery(Types.FETCH_UPDATE_PROFILE, updateProfileWorker)
}

