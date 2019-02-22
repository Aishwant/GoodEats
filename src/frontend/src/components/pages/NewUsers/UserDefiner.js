import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//url link as signup definer
export class UserDefiner extends Component {
  state = {
    email: "",
    pwd: ""
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    newUser: PropTypes.bool.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    if (!this.isAuthenticated && this.newUser) {
        return <Redirect to="/" />;
    }
    if (this.isAuthenticated && !this.newUser) {
        return <Redirect to="/" />;
    }
    const { email, pwd } = this.state;
    return (
        <div>
            <h3>Let's Get to know you better</h3>
            <form onSubmit={this.onSubmit}>
            </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  newUser: state.authReducer.newUser
});

export default connect(
  mapStateToProps,
  {  }
)(UserDefiner);
