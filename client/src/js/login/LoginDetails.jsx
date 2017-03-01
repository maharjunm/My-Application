import React, { Component, PropTypes }from "react";
export default class LoginDetails extends Component {
    render() {
        return (
            <div>
                User Name is {this.props.userName}
                Password is {this.props.password}
            </div>
        );
    }
}

LoginDetails.propTypes = {
  "userName": PropTypes.string.isRequired,
  "password": PropTypes.string.isRequired
};