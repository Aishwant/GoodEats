import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addUser } from "../../../actions/addNewUser";

//url link as signup definer
export class UserDefiner extends Component {
  state = {
    fname: "",
    lname: "",
    name: "",
    address: "",
    city: "",
    zipcode: "",
    open: "",
    close: "",
    CuisineType: "",
    owner_ID: "",
    changeO: false,
    changeC: false,
    changeD: false
  };

  componentDidMount(){
    this.setState({
      owner_ID: this.props.uID
    });
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    newUser: PropTypes.bool.isRequired,
    addUser: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    if(this.state.changeC){
      this.props.addUser(this.state);
    }
    else if(this.state.changeO){
      this.props.addUser(this.state);
    }
    else if(this.state.changeD){
      this.props.addUser(this.state);
    }
    window.location.reload();
  };

  onClickOwner() {
    this.setState({ changeO: !this.state.changeO });
    this.setState({ changeC: false, changeD: false });
    
  }

  onClickCustomer() {
    this.setState({ changeC: !this.state.changeC });
    this.setState({ changeO: false, changeD: false });
  }

  onClickDelivery() {
    this.setState({ changeD: !this.state.changeD });
    this.setState({ changeC: false, changeO: false });
  }

  render() {
    if (!this.isAuthenticated && this.newUser) {
      return <Redirect to="/" />;
    }
    if (this.isAuthenticated && !this.newUser) {
      return <Redirect to="/" />;
    }

    let btnStyleO = this.state.changeO
      ? { color: "#fff", backgroundColor: "#333" }
      : { backgroundColor: "#aaa" };
    let btnStyleC = this.state.changeC
      ? { color: "#fff", backgroundColor: "#333" }
      : { backgroundColor: "#aaa" };
    let btnStyleD = this.state.changeD
      ? { color: "#fff", backgroundColor: "#333" }
      : { backgroundColor: "#aaa" };

    const ownerForm = (
      <div style={margin15}>
        Let's add your first restaurant
        <br /><br />
        <input
          type="text"
          name="name"
          onChange={this.onChange}
          value={name}
          placeholder="Restaurant's Name"
          className="form-control"
        />
        <br />
        <input
          type="text"
          name="CuisineType"
          onChange={this.onChange}
          value={CuisineType}
          placeholder="Restaurant's Cuisine Type"
          className="form-control"
        />
        <br />
        <input
          type="text"
          name="address"
          onChange={this.onChange}
          value={address}
          placeholder="Street Address"
          className="form-control"
          required
        />
        <br />
        <input
          type="text"
          name="city"
          onChange={this.onChange}
          value={city}
          placeholder="City"
          className="form-control"
          required
        />
        <br />
        <input
          type="text"
          name="zipcode"
          onChange={this.onChange}
          value={zipcode}
          placeholder="Zip Code"
          className="form-control"
          pattern="^\d{5}(?:[-\s]\d{4})?$"
          title="Not a valid Zip Code"
          required
        />
        <br />
        <label>Open time</label>
        <input
          type="time"
          name="open"
          onChange={this.onChange}
          value={open}
          className="form-control"
          required
        />
        <br />
        <label>Close time</label>
        <input
          type="time"
          name="close"
          onChange={this.onChange}
          value={close}
          className="form-control"
          required
        />
      </div>
    );

    const zipcodeF = (
      <div style={margin15}>
        <h6>Help us give you localized options</h6>
        <input 
          type="text"
          name="zipcode"
          onChange={this.onChange}
          value={zipcode}
          placeholder="Zip Code"
          className="form-control"
          pattern="^\d{5}(?:[-\s]\d{4})?$"
          title="Not a valid Zip Code"
          required
        />
      </div>
    );

    const { fname, lname, name, address, city, zipcode, open, close, CuisineType } = this.state;
    // const { changeO, changeC, changeD } = this.state;
    return (
      <div className="row">
        <div className="col-md"></div>
        <div className="col-auto">
          <h3 className="mb-2 mt-3">Let's get to know you better</h3>
          <br />
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="fname"
              onChange={this.onChange}
              value={fname}
              placeholder="First Name"
              className="form-control"
              required
            />
            <br />
            <input
              type="text"
              name="lname"
              onChange={this.onChange}
              value={lname}
              placeholder="Last Name"
              className="form-control"
              required
            />
            <br />
            <button
              type="button"
              className="btn btn-lg"
              style={btnStyleO}
              onClick={this.onClickOwner.bind(this)}
              data-toggle="modal"
              data-target="#ownerModalCenter"
              
            >
              Owner of a restaurant
            </button>{" "}
            <button
              type="button"
              className="btn btn-lg"
              style={btnStyleC}
              onClick={this.onClickCustomer.bind(this)}
            >
              Customer
            </button>{" "}
            <button
              type="button"
              className="btn btn-lg"
              style={btnStyleD}
              onClick={this.onClickDelivery.bind(this)}
            >
              Delivery Driver
            </button>{" "}
            <br />

            {this.state.changeO ? ownerForm:''}
            {this.state.changeC ? zipcodeF:''}
            {this.state.changeD ? zipcodeF:''}
            
            <button type="submit" className="btn btn-primary" style={margin15}>Submit</button>

          </form>
        </div>
        <div className="col-md"></div>
      </div>
    );
  }
}

const margin15 = {
  margin: "15px"
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  newUser: state.authReducer.newUser,
  uID: state.authReducer.uID
});

export default connect(
  mapStateToProps,
  { addUser }
)(UserDefiner);
