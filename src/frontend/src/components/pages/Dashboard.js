import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../customer/Restaurant';
import store from '../../store';
import { getUser } from '../../actions/getUser';

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
          <Fragment>
            <h1>Welcome Customer</h1>
            <br />
            <Restaurant />
          </Fragment>
        );
      case "Driver":
        return(
          <Fragment>
            <h1>Welcome Driver</h1>
            <br />
            <Restaurant />
          </Fragment>
        );
      case "Owner":
        return(
          <Fragment>
            <h1>Welcome Owner</h1>
            <br />
            <Restaurant />
          </Fragment>
        );
      default:
          //direct to new user page so that a the account type can be determined
          return(
            <Fragment>
              <h1>NO USER TYPE</h1>
              <br />
              <Restaurant />
            </Fragment>
          );
    }
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default connect(mapStateToProps, { getUser })(Dashboard);

