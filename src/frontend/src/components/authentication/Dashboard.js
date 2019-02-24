import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../customer/Restaurant';

export class Dashboard extends Component{
  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  render(){
      return (
        <Fragment>
          <h1>Welcome</h1>
          <br />
          <Restaurant />
        </Fragment>
      )
  }

}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps)(Dashboard);

