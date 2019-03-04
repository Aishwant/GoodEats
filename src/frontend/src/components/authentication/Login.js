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
      <div className="row">
        {/* <div className="col-md"></div> 
        <div className="col-md"></div> */}
        <div className="col-md" style={divStyle}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email</label>
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
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
          <p>
            <Link to="/forgotPwd">Forgot Passowrd? </Link>
          </p>
        </form>
        </div>
      </div>
    );
  }
}

const divStyle = {
  border: '3px solid #DCE1E7',
  // borderRadius: '10%',
  padding: '20px',
  margin: '5px'
};

const bgpic={
  background: 'url("https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fevanwise.jpg?alt=media&token=6986eebb-7928-42d6-9d4e-7589990f29b3")'
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
});


export default connect(
  mapStateToProps,
  { loginAuth }
)(Login);
