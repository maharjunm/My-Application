import { combineReducers } from "redux";
import { printDetails } from "./../js/login/reducers/SampleReducer";
import { getUsername } from "./../js/login/reducers/UserNameReducer";

const myApplicationReducers = combineReducers({
    printDetails,
    getUsername
});

export default myApplicationReducers;