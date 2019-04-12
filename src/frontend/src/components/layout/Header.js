import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authentication";
import { getItemCount } from "../../actions/orders"
import { withRouter } from "react-router-dom";
<<<<<<< HEAD
import OwnerPendingOrder from "../owner/OwnerPendingOrder";
import Modal from 'react-bootstrap/Modal'
import Button from "react"
=======
import OrdersPending from "../owner/OrdersPending";
>>>>>>> a892cbc82578d0f2afd74b77daf3f6f84e9517fe

export class Header extends Component {
  static propTypes = {
    authReducer: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };
 

  handleData(data) {
    let result = JSON.parse(data);
    console.log(result);
    console.log(result['message']);
  }

  sendMessage(message){
    console.log("Clicked send");
    this.refWebSocket.sendMessage(JSON.stringify({
      'message': message
    }));
  }


  render() {
    const contentKeys = Object.keys(this.props.user)
    const { isAuthenticated } = this.props.authReducer;
    let path = location.href+"";

    if (path.substr(path.length - 4 ) == "home") path = false
    const authLinks = (
      <li className="nav-item">
        <Link to="/home" className="nav-link" onClick={this.props.logout}>
          Log Out <i className="fas fa-sign-out-alt"></i>
        </Link>
      </li>
    );

    const guestLinks1 = (
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
    );
    const guestLinks = (
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    );

    const nonemptyCart = (
      <li className="nav-item">
        <Link to="/cart" className="nav-link">
          <i className="fas fa-shopping-cart">
            <span className="badge badge-pill badge-danger">{this.props.itemCount}</span>
          </i>
        </Link>
      </li>
    );
    
    const emptyCart = (
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            <i className="fas fa-shopping-cart">
            </i>
          </Link>
        </li>
    );

    const pendingOrders = (
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-concierge-bell"></i>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <OwnerPendingOrder/>
          </div>
        </a>
      </li>
  );

    const settings = (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user-cog"></i>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
<<<<<<< HEAD
          <a className="dropdown-item" href="#">Order History</a>
          <a className="dropdown-item" href="#">My Profile</a>
          <div className="dropdown-divider"></div>
          <li className="dropdown-item">
            <Link to="/home" className="dropdown-item" onClick={this.props.logout}>
              Log Out <i className="fas fa-sign-out-alt"></i>
            </Link>
          </li>
        </div>
      </li>
    )

    const cusSettings = (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user-cog"></i>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
     
          <Link to="/orderhistory" className="dropdown-item">Order History</Link>

          <a className="dropdown-item" href="#">My Profile</a>
=======
          <a className="dropdown-item" href="#">My Orders</a>
          <Link to="/myProfile" className="dropdown-item">My Profile</Link>
>>>>>>> a892cbc82578d0f2afd74b77daf3f6f84e9517fe
          <div className="dropdown-divider"></div>
          <li className="dropdown-item">
            <Link to="/home" className="dropdown-item" onClick={this.props.logout}>
              Log Out <i className="fas fa-sign-out-alt"></i>
            </Link>
          </li>
        </div>
      </li>
    )

<<<<<<< HEAD
    const ownerSettings = (
      <div class="container">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user-cog"></i>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown" >



          <a className="dropdown-item" href="#"><i class="fas fa-user"></i> My Profile</a>
          
          <div className="dropdown-divider"></div>
          <li className="dropdown-item">
            <Link to="/home" className="dropdown-item" onClick={this.props.logout}>
              Log Out <i className="fas fa-sign-out-alt"></i>
            </Link>
          </li>
        </div>
      </li> 
      </div>
=======
    const ordersPending = (
      <li className="nav-item">
        <OrdersPending />
      </li>
>>>>>>> a892cbc82578d0f2afd74b77daf3f6f84e9517fe
    )

    const cart = this.props.itemCount > 0 ? nonemptyCart : emptyCart

    return (
      <nav className={path?"navbar navbar-expand-lg navbar-dark bg-dark navSize":"navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light"} id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" style={borderStyle} href="/">GoodEats</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
              <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
              {isAuthenticated ? "" : guestLinks}
              {isAuthenticated ? "" : guestLinks1}
              {isAuthenticated && contentKeys[0] === "Customer" ? cart : ""}
<<<<<<< HEAD
              {isAuthenticated && contentKeys[0] === "Owner" ? pendingOrders: ""}
              {isAuthenticated && contentKeys[0] === "Owner" ? ownerSettings : ""}
              {isAuthenticated && contentKeys[0] === "Customer" ? cusSettings : ""}
              {isAuthenticated && contentKeys[0] === "Driver" ? settings : ""}
            
=======
              {isAuthenticated && contentKeys[0] === "Owner" ? ordersPending : ""}
              {isAuthenticated ? settings : ""}
>>>>>>> a892cbc82578d0f2afd74b77daf3f6f84e9517fe
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

const navStyle = {
  backgroundColor: "#00B9F3",
  marginBottom: "25px",
};

const borderStyle = {
  border: "solid 2px #fff",
  padding: '4px'
}

const colorWhite ={
    color: '#fff'
}

const mapStateToProps = state => ({
  authReducer: state.authReducer,
  itemCount:  state.cartReducer.itemCount,
  user: state.authReducer.user
});

export default withRouter(
  connect(
    mapStateToProps,
    { logout, getItemCount }
  )(Header)
);
