import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authentication"


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
            <nav>
                Here goes our Header
                { isAuthenticated ? authLinks : guestLinks }
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    authReducer: state.authReducer
})

export default connect(mapStateToProps, { logout })(Header);