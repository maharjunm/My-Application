export const USERNAME_TYPE = "USERNAME_TYPE";
export function returnAction(userName) {
    return {
        "type": USERNAME_TYPE,
        "userName": userName
    }
}