import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authentication";
import { Link, Redirect } from "react-router-dom";

export class Register extends Component {
  state = {
    email: "",
    pwd: "",
    pwd1: ""
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    if(this.state.pwd===this.state.pwd1){
      this.props.register(this.state);
    }else{
      console.log("Passwords don't match");
    }

  };

  render() {
    if(this.props.isAuthenticated){
      return <Redirect to ="/" />
    }
    const { email, pwd, pwd1 } = this.state;
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
        Repeat Password:{" "}
        <input
          type="password"
          name="pwd1"
          onChange={this.onChange}
          value={pwd1}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
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
  { register }
)(Register);