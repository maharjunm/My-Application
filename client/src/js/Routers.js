/* eslint react/display-name:0 react/jsx-wrap-multilines:0*/
import { Route } from "react-router";
import React from "react";
import Login from "./../js/login/Login";
import App from "./App";

export function renderRoutes() {
    return (
        <Route component={App}>
            <Route path="/" component={Login} />
        </Route>
    );
}

