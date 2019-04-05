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
    isAuthenticated: PropTypes.bool,
    newUser: PropTypes.bool
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
    if(this.props.isAuthenticated && this.props.newUser){
      return <Redirect to ="/signupinfo" />
    }
    else if(this.props.isAuthenticated){
      return <Redirect to ="/" />
    }
    const { email, pwd, pwd1 } = this.state;
    return (
      
      
        <div className="row" style={bgGrey}>
          <div className="col-md"></div>
          <div className="col-md" style={divStyle}>
            <center><h3>Register</h3></center>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                type="email"
                name="email"
                onChange={this.onChange}
                value={email}
                placeholder="Enter email"
                className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                type="password"
                name="pwd"
                onChange={this.onChange}
                value={pwd}
                className="form-control"
                placeholder="Password"
                pattern="(?=^.{8,255}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*"
                title="Your password must be atleast 8 characters long and contain a lowecase letter, uppercase letter, number"
                required
                />
              </div>
              <div className="form-group">
                <label>Retype Password</label>
                <input
                type="password"
                name="pwd1"
                onChange={this.onChange}
                value={pwd1}
                className="form-control"
                placeholder="Retype Password"
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
              <p style={{marginTop:"10px"}}>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
          <div className="col-md"></div>
        </div>
      
    );
  }
}

const divStyle = {
  border: '3px solid #DCE1E7',
  borderRadius: '10%',
  padding: '20px',
  margin: '5px'
};

const bgGrey = {
  backgroundColor: "#fcfcfc",
  marginTop: "5%",
  marginBottom: "5%"
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  newUser: state.authReducer.newUser
});


export default connect(
  mapStateToProps,
  { register }
)(Register);