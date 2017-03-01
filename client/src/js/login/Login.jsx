import React, { PropTypes, Component } from "react";

export default class Login extends Component {

    fun1() {
        console.log(this.refs.username.value);
        console.log(this.refs.password.value);
    }

    render () {
        return (
            <div>
                <div>
                    <form onSubmit={() => {this.fun1();}}>
                        User Name: <input type="text" ref="username"></input>
                        Password: <input type="password" ref="password"></input>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
};