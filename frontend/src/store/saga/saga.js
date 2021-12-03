import {all} from "redux-saga/effects"
import { profileWatcher } from "./profile";
import {usersWatcher} from "./users";

export function* rootWatcher() {
    yield all([usersWatcher(), profileWatcher()])
}
