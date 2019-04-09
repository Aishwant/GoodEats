import React, { Component } from 'react'
import Restaurant_Owner from './Restaurant_Owner'
import * as firebase from 'firebase';


export default class Owner extends Component {

  /*constructor(){
    super();
    this.state = {
      order: "initial"
    };
  }

  componentDidMount(){
    const rootRef = firebase.database().ref().child('Users').child("7tXRHUVp2uNScdBm1gwHrmDdoB92").child("Owner");
    const orderRef = rootRef.child('Orders');
    orderRef.on('value', snap => {
      this.setState({
        order: snap.val()
      })
    })
  }*/

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Welcome {this.props.name}</h1>
        </div>
        
          <Restaurant_Owner />
      </div>
    )
  }
}
