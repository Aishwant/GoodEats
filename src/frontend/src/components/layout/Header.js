import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authentication"
import { withRouter } from 'react-router-dom';

export class Header extends Component {
    static propTypes = {
        authReducer: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }
   
    render() {
        
        const { isAuthenticated } = this.props.authReducer;
        
        const authLinks = (
            <div>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        );
        
        const guestLinks = (
            <div>
                <Link to="/register">Register</Link> {" "}
                <Link to="/login">Login</Link>
            </div>
        );

        return (
            <nav style={navStyle}>
                Here goes our Header
                { isAuthenticated ? authLinks : guestLinks }
            </nav>
        )
    }
}

const navStyle={
    backgroundColor: '#dfdfdf'
}

const mapStateToProps = state => ({
    authReducer: state.authReducer
})

export default withRouter(connect(mapStateToProps, { logout })(Header));