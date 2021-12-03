import { combineReducers } from "redux";
import profileReducer from "./profile";
import resultReducer from "./result";
import usersReducer from "./users";

const rootReducer = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    resultPage: resultReducer,
});

export default rootReducer;