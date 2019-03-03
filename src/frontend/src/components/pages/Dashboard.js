import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../store';
import { getUser } from '../../actions/getUser';
import Customer from '../customer/Customer'
import Driver from '../driver/Driver'
import Owner from '../owner/Owner'

export class Dashboard extends Component {
  static propTypes = {
    //userType: PropTypes.number //0=customer, 1=driver, 2=owner
  }

  componentDidMount(){
    this.props.getUser();
  }
  
  render(){
    const contentKeys = Object.keys(this.props.user)
    console.log(contentKeys)
    
    switch(contentKeys[0]){
      case "Customer":
        return(
          <Customer />
        );
      case "Driver":
        return(
          <Driver />
        );
      case "Owner":
        return(
          <Owner />
        );
      default:
          //direct to new user page so that a the account type can be determined
          return(
            <Fragment>
              <h1>NO USER TYPE</h1>
            </Fragment>
          );
    }
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default connect(mapStateToProps, { getUser })(Dashboard);

