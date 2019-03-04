import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/getUser';
import Customer from '../customer/Customer'
import Driver from '../driver/Driver'
import Owner from '../owner/Owner'

export class Dashboard extends Component {

  componentDidMount(){
    this.props.getUser();
  }
  
  render(){
    const contentKeys = Object.keys(this.props.user)
    console.log(contentKeys)
    console.log(this.props.user['Owner'])
    
    switch(contentKeys[0]){
      case "Customer":
        return(
          <div>
          {contentKeys.map(t=> [this.props.user[t]].map(res =>
            <Customer name={res.fname}/>
          ))}
          </div>
        );
      case "Driver":
        return(
          <div>
          {contentKeys.map(t=> [this.props.user[t]].map(res =>
            <Driver name={res.fname}/>
          ))}
          </div>
        );
      case "Owner":
        return(
          <div>
          {contentKeys.map(t=> [this.props.user[t]].map(res =>
            <Owner name={res.fname}/>
          ))}
          </div>
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

