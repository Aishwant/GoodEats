import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../customer/Restaurant';
import store from '../../store';
import { getRestaurantName } from '../../actions/authentication';

export class Dashboard extends Component {
  static propTypes = {
    isCustomer: PropTypes.bool,
    isDriver: PropTypes.bool,
    isOwner: PropTypes.bool
  }
  
  render(){
    return(
      <Fragment>
          <h1>Welcome</h1>
          <br />
          <Restaurant />
      </Fragment>
  
    );
  }
 
}

export default Dashboard;

