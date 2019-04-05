import React, { Component } from 'react'
import Restaurant from '../customer/Restaurant'

export default class Customer extends Component {
  render() {
    return (
      <div className="row">
        
        <div className="col-md-6" style={{borderBottom:"solid 3px #ddd", paddingBottom:"15px", marginBottom:"25px"}}>
          <h1>Welcome {this.props.name}</h1>
          <br />
        </div>
        <Restaurant zip={this.props.zip}/>
        
      </div>
    )
  }
}
