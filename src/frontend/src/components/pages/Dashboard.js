import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../customer/Restaurant';
import store from '../../store';
import { getRestaurantName } from '../../actions/authentication';

export default function Dashboard() {
  return(
    <Fragment>
        <h1>Welcome</h1>
        <h4>Restaurants near you</h4>
        <br />
        <Restaurant />
    </Fragment>

  );
}

