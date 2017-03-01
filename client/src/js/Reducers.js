import { combineReducers } from "redux";
import { printDetails } from "./../js/login/reducers/SampleReducer";

const myApplicationReducers = combineReducers({
    printDetails
});

export default myApplicationReducers;