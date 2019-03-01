import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";


export class OwnerModel extends Component {

  state = {
    rname:"",
    address:"",
    city:"",
    zipcode:""
  }

  onChange = e => {

  }

  onSubmit = e =>{
    e.preventDefault();
  }

  render() {
    const { rname, address, city, zipcode } = this.state;
    return (
      <div>
        <button
          type="button"
          className="btn btn-lg"
          data-toggle="modal"
          data-target="#ownerModalCenter"
        />
        <div
          className="modal fade"
          id="ownerModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Let's add one of your Restaurant
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <input
                    type="text"
                    name="rname"
                    onChange={this.onChange}
                    value={rname}
                    placeholder="Restaurant's Name"
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
                  />
                  <input
                    type="text"
                    name="city"
                    onChange={this.onChange}
                    value={city}
                    placeholder="City"
                    className="form-control"
                  />
                  <br />
                  <input
                    type="text"
                    name="zipcode"
                    onChange={this.onChange}
                    value={zipcode}
                    placeholder="Zip code"
                    className="form-control"
                  />
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OwnerModel;
