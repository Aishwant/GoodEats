import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { forgotPwd } from "../../actions/authentication";

export class ForgotPwd extends Component {
    state = {
        email:""
    }

    static propTypes = {
        forgotPwd: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]:e.target.value });

    onSubmit = e => {
        e.preventDefault();
        this.props.forgotPwd(this.state);
    }
    render(){
        if(this.props.isAuthenticated){
            return <Redirect to ="/" />
        }
        const { email } = this.state;
        return(
            <div className="row">
                <div className="col-md"></div>
                <div className="col-md" style={divStyle}>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                            <input
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                            placeholder="Enter email"
                            className="form-control"
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button><br /><br />
                        <p>
                            <Link to="/login">Go Back to Login</Link>
                        </p>
                    </form>
                </div>
                <div className="col-md"></div>
            </div>
            
        )
    }
}

const divStyle = {
    border: '3px solid #0875B2',
    borderRadius: '5%',
    padding: '20px',
    marginTop: '25px'
  };
  

export default connect(null,{ forgotPwd })(ForgotPwd);