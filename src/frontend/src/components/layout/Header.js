import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <nav>
                Here goes our Header
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </nav>
        )
    }
}

export default Header