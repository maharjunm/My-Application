import { USERNAME_TYPE } from "./../actions/SomeActions";
export function getUsername(state = {}, action = {}) {
    switch(action.type){
        case USERNAME_TYPE:
                return action.userName;
        default:
            return "Maharjun";
    }
}