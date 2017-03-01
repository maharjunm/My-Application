import React from "react";
import ReactDOM from "react-dom";
import { createStore , applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import myApplicationReducers from "./Reducers";
import { renderRoutes } from "./Routers";
import { Provider } from "react-redux";
import { Router } from "react-router";
import History from "./History";

const store = createStore(myApplicationReducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <Router history={History.getHistory()}>{renderRoutes()}</Router>
    </Provider>,
    document.getElementById("main")
);