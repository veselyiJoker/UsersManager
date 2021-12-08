import axios from "axios";
import { put, takeEvery, call} from "redux-saga/effects"
import { usersAdapter } from "../../assets/utils";
import { addUsers, setUsers } from "../actions/users";
import { Types } from "../constants";

const fetchSetUsers = () => axios ({
    method: "get",
    url: "/api/users"
});

const fetchAddUsers = (pageNumber) => axios ({
    method: "get",
    url: '/api/users?page=' + pageNumber,
})

function* fetchUsersWorker() {
    const response = yield call(fetchSetUsers)
    yield put(setUsers(usersAdapter(response.data)))
}

function* addUsersWorker(action) {
    const response = yield call(fetchAddUsers, action.payload)
    yield put(addUsers(usersAdapter(response.data).users))
}

export function* usersWatcher() {
    yield takeEvery(Types.FETCH_SET_USERS, fetchUsersWorker)
    yield takeEvery(Types.FETCH_ADD_USERS, addUsersWorker)
}

