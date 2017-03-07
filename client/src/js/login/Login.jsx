import React, { PropTypes, Component } from "react";
import { returnAction } from "./actions/SomeActions";
import ShowUserName from "./ShowUsername";
import { connect } from "react-redux";

export class Login extends Component {

    fun1() {
        this.props.dispatch(returnAction(this.refs.username.value));
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
                <ShowUserName/>
            </div>
        );
    }
}

function store(store) {
    return store;
}

Login.propTypes = {
    "dispatch": PropTypes.func.isRequired
};

export default connect(store)(Login);
