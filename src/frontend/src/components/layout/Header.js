import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authentication";
import { withRouter } from "react-router-dom";

export class Header extends Component {
  static propTypes = {
    authReducer: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated } = this.props.authReducer;

    const authLinks = (
      <li className="nav-item">
        <Link to="/login" className="nav-link"  style={colorWhite} onClick={this.props.logout}>
          Log Out
        </Link>
      </li>
    );

    const guestLinks1 = (
      <li className="nav-item">
        <Link to="/register" className="nav-link" style={colorWhite}>
          Register
        </Link>
      </li>
    );
    const guestLinks = (
      <li className="nav-item">
        <Link to="/login" className="nav-link" style={colorWhite}>
          Login
        </Link>
      </li>
    );

    return (

        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={navStyle}
        >
          <a className="navbar-brand" style={colorWhite} href="#">
            GoodEats
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={colorWhite}
          >
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {isAuthenticated ? authLinks : guestLinks}
              {isAuthenticated ? "" : guestLinks1}
            </ul>
          </div>
        </nav>

    );
  }
}

const navStyle = {
  backgroundColor: "#00B9F3",
  marginBottom: "25px",
};

const colorWhite ={
    color: '#fff'
}

const mapStateToProps = state => ({
  authReducer: state.authReducer
});

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(Header)
);
