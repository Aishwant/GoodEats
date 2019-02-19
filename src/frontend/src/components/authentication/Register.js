import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authentication";
import { Link } from "react-router-dom";

export class Register extends Component {
  state = {
    email: "",
    pwd: "",
    pwd1: ""
  };

  static propTypes = {
    register: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { email, pwd, pwd1 } = this.state;
    const lead = { email, pwd, pwd1 };
    this.props.register(lead);
  };

  render() {
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

export default connect(
  null,
  { register }
)(Register);
