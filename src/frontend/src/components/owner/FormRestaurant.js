import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { addRestaurant } from "../../actions/getRestaurants"

export class FormRestaurant extends Component {
    state = {
        Address: "",
        City: "",
        Cpen: "",
        Close: "",
        Name: "",
        img: "",
        zipcode: ""
    }

    static propTypes = {
        addRestaurant: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { Address, City, Open, Close, Name, img, zipcode } = this.state;
        const restaurant = { Address, City, Open, Close, Name, img, zipcode };
        this.props.addRestaurant(restaurant);
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
            <div className="card card-body mt-4 mb-4">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                        className="form-control"
                        type="text"
                        name="Name"
                        onChange={this.onChange}
                        value={Name}
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
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addRestaurant })(FormRestaurant);
