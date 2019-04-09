import React, { Component } from 'react'

export default class OrdersPendingCard extends Component {
  render() {
    return (
      <div>
        <div class="card">
            <div class="card-header" id="headingOne">
            <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target={"#" + this.props.orderData} aria-expanded="true" aria-controls="collapseOne">
                {this.props.orderData}
                </button>
                <button className="btn btn-success">Accept</button> | <button className="btn btn-danger">Reject</button>
            </h5>
            </div>

            <div id={this.props.orderData} class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
            {
                
                    <p>Placeholder data</p>
            
            }
            </div>
            </div>
        </div>
      </div>
    )
  }
}
