/* eslint react/jsx-wrap-multilines:0*/
import { createHashHistory } from "history";

const history = createHashHistory();

export default class History {
    static getHistory() {
        return history;
    }
}

history.listen((ev) => {
    if(ev.pathname !== "/") {
        // UserSession.instance().continueSessionIfActive();
    }
});