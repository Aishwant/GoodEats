import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { editRestaurant } from "../../actions/getRestaurants"

export class EditRestaurant extends Component {
    state = {
        Address: this.props.address,
        City: this.props.city,
        Open: this.props.open,
        Close: this.props.close,
        Name: this.props.name,
        img: "",
        zipcode: this.props.zipcode
    }

    static propTypes = {
        editRestaurant: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { Address, City, Open, Close, Name, img, zipcode } = this.state;
        const restaurant = { Address, City, Open, Close, Name, img, zipcode };
        this.props.editRestaurant(restaurant, this.props.rID);
        this.setState({
            Address: "",
            City: "",
            Open: "",
            Close: "",
            Name: "",
            img: "",
            zipcode: ""
        });
    }

    render() {
        const { Address, City, Open, Close, Name, img, zipcode } = this.state;
        return (
                <div>
                    <button type="button" className="btn btn-warning ml-2" data-toggle="modal" data-target="#editModal">
                    Edit
                    </button>

                    <form onSubmit={this.onSubmit}>
                    <div className="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Restaurant</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body"></div>
                        <div className="ml-4 mr-4 mt-4 mb-4">
                            
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                    className="form-control"
                                    type="text"
                                    name="Name"
                                    onChange={this.onChange}
                                    value={Name}
                                    required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input
                                    className="form-control"
                                    type="text"
                                    name="Address"
                                    onChange={this.onChange}
                                    value={Address}
                                    required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input
                                    className="form-control"
                                    type="text"
                                    name="City"
                                    onChange={this.onChange}
                                    value={City}
                                    required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Zipcode</label>
                                    <input
                                    className="form-control"
                                    type="text"
                                    name="zipcode"
                                    onChange={this.onChange}
                                    value={zipcode}
                                    required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Open</label>
                                    <input 
                                    className="form-control"
                                    type="time"
                                    name="Open"
                                    onChange={this.onChange}
                                    value={Open}
                                    required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Close</label>
                                    <input 
                                    className="form-control"
                                    type="time"
                                    name="Close"
                                    onChange={this.onChange}
                                    value={Close}
                                    required
                                    />
                                </div>
                            </div>
                        <div className="modal-footer">
                            <button type="button" id="cancel" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary" >Save</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    </form>
                </div>
        )
    }
}

export default connect(null, { editRestaurant })(EditRestaurant);