import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getUser } from '../../actions/getUser';
import { editUser } from '../../actions/addNewUser';


export class MyProfile extends Component {
    state = {
        Address1: "",
        Address2: "",
        city: "",
        fname: "",
        lname:"",
        zipcode: "",
        email:"",
        Phone:"",
        user_id:"",
    };

    componentDidMount(){
        this.props.getUser();

        const keys = Object.keys(this.props.user);
        this.state.user_id = keys[0];
        keys.map(t=>
            [this.props.user[t]].map(info=>{
                this.state.fname = info.fname
                this.state.lname = info.lname
                this.state.Address1 = info.Address1
                this.state.Address2 = info.Address2
                this.state.city = info.city
                this.state.Phone = info.Phone
                this.state.zipcode = info.zipcode
                this.state.email = info.email
            })
            )
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    
    onSubmit = e => {
        e.preventDefault();
        this.props.editUser(this.state);
    }

    render() {
        const {Address1,Address2,city,fname,lname,hone,zipcode,email,Phone} = this.state;
        return (
            <div className="container" style={{padding: '4% 10%'}}>
                <center><h2>My Profile</h2></center>
                <form onSubmit={this.onSubmit}>
                    <div className="ml-4 mr-4 mt-4 mb-4">
                        
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                            className="form-control"
                            type="text"
                            name="fname"
                            onChange={this.onChange}
                            value={fname}
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                            className="form-control"
                            type="text"
                            name="lname"
                            onChange={this.onChange}
                            value={lname}
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input
                            className="form-control"
                            type="text"
                            name="Address1"
                            onChange={this.onChange}
                            value={Address1}
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label>Address Optional</label>
                            <input
                            className="form-control"
                            type="text"
                            name="Address2"
                            onChange={this.onChange}
                            value={Address2}
                            
                            />
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input
                            className="form-control"
                            type="text"
                            name="city"
                            onChange={this.onChange}
                            value={city}
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
                            pattern="^\d{5}(?:[-\s]\d{4})?$"
                            title="Not a valid zipcode"
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input 
                            className="form-control"
                            type="text"
                            name="Phone"
                            onChange={this.onChange}
                            value={Phone}
                            pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
                            title="Not a valid PhoneNumber"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                            className="form-control"
                            type="text"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                            readonly
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                    <Link to="/"><button type="button" className='btn btn-light'>Cancel</button></Link>
                    <button type="submit" className="btn btn-primary" >Save</button>
                    </div>
                </form>
            </div>
        )
    }
    }

const mapStateToProps = state => ({
    user: state.authReducer.user
});

export default connect(mapStateToProps,{ getUser,editUser })(MyProfile);