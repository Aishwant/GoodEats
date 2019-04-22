import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../actions/getUser'
import Customer from '../customer/Customer'
import Driver from '../driver/Driver'
import Owner from '../owner/Owner'
import { Redirect } from "react-router-dom"

export class Dashboard extends Component {

  componentDidMount(){
    this.props.getUser();
  }
  
  render(){
    const contentKeys = Object.keys(this.props.user)
    
    switch(contentKeys[0]){
      case "Customer":
        return(
          <div className="container" style={{marginTop:"65px"}}>
            
          {contentKeys.map(t=> [this.props.user[t]].map(res =>
            <Customer name={res.fname} zip={res.zipcode}/>
          ))}
          </div>
        );
      case "Driver":
        return(
          <div className="container" style={{marginTop:"55px"}}>
            
          {contentKeys.map(t=> [this.props.user[t]].map(res =>
            <Driver name={res.fname}/>
          ))}
          </div>
        );
      case "Owner":
        return(
          <div className="container" style={{marginTop:"45px"}}>
            
          {contentKeys.map(t=> [this.props.user[t]].map(res =>
            <Owner name={res.fname} />
          ))}
          </div>
        );
      case "status":
        return <Redirect to ="/signupinfo" />
      case "":
        return <Redirect to ="/signupinfo" />
      default:
          console.log(contentKeys)
          return(
            <h1></h1>
          )
          
    }
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default connect(mapStateToProps, { getUser })(Dashboard);

