import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginAuth } from "../../actions/authentication";
import { Link, Redirect } from "react-router-dom";


export class Login extends Component {
  state = {
    email: "",
    pwd: ""
  };

  static propTypes = {
    loginAuth: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.loginAuth(this.state);
  };

  render() {
    if(this.props.isAuthenticated){
      return <Redirect to ="/" />
    }
    const { email, pwd } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        Email:{" "}
        <input
          type="text"
          name="email"
          onChange={this.onChange}
          value={email}
        />
        <br />
        <br />
        Password:{" "}
        <input
          type="password"
          name="pwd"
          onChange={this.onChange}
          value={pwd}
        />
        <br />
        <br />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
});


export default connect(
  mapStateToProps,
  { loginAuth }
)(Login);
