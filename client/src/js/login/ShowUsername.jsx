import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";

export class ShowUsername extends Component {
    render() {
        return (
            <div className="username">
                {this.props.username}
            </div>
        );
    }
}

ShowUsername.propeTypes = {
    "username": PropTypes.string.isRequired
};

function mapToStore(store) {
    return {
      "username": store.getUsername
    }
}

export default connect(mapToStore)(ShowUsername);

