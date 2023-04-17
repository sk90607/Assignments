//Import multiple reducers and combine them using redux

import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber
});

export default rootReducer;