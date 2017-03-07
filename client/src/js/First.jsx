import React, { Component } from "react";
import Login from "./login/Login.jsx";

export default class First extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1>Login</h1>
                </div>
                <Login dispatch={ () => {}}/>
            </div>
        );
    }
}


