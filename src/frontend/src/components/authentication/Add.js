import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads"

export class Add extends Component {

  state = {
    name: "",
    email: "",
    message: ""
  }

  static propTypes={
    addLead: PropTypes.func.isRequired
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
          Name:{" "}
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            value={name}
          />
          <br />
          <br />
          Email:{" "}
          <input
            type="text"
            name="email"
            onChange={this.onChange}
            value={email}
          />
          <br />
          <br />
          Message:{" "}
          <input
            type="text"
            name="message"
            onChange={this.onChange}
            value={message}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
    )
  }
}

export default connect(null,{ addLead })(Add);
