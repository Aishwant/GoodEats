import React, { Component } from 'react'
import Restaurant from '../customer/Restaurant'
import { getItemCount } from "../../actions/orders"
import { connect } from 'react-redux';

export class Customer extends Component {
  componentDidMount(){
    this.props.getItemCount();
  }
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

export default connect(null, { getItemCount })(Customer);
