import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMyRestaurantsOrders, setMyRestaurantsOrders } from '../../actions/orders'
import { orderBy } from "lodash"

export class MyRestaurantsOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sortParams: {
            direction: undefined
          }
        };
      }

    componentDidMount(){
      this.props.getMyRestaurantsOrders();
    }

    /*componentDidUpdate(){
      this.props.getMyRestaurantsOrders();
    }*/

    handleColumnHeaderClick(sortKey) {
        const { sortParams: { direction }} = this.state;
        const temp = this.props.myRestaurantsOrders;
        console.log(temp);
        const sortDirection = direction === "desc" ? "asc" : "desc";

        const sortedCollection = orderBy(
            temp,
            [sortKey],
            [sortDirection]
          );
          console.log(sortedCollection);
        this.props.setMyRestaurantsOrders(sortedCollection);
        this.setState({ sortParams: {direction: sortDirection} });
    }

  render() {
    const contentKeys = Object.keys(this.props.myRestaurantsOrders);
    {if(contentKeys.length === 0){
      return(
          <div className="container mt-3">
              <h2>You Have No Orders</h2>
          </div>
      )
    }}
    return (
        <div className="container mt-3">
        <h2>My Restaurants Orders</h2>
        <table className="table table-striped">
            <thead>
              <tr>
                <th onClick={() => this.handleColumnHeaderClick("orderDate") }>Date <i className="fas fa-caret-up"></i><i className="fas fa-caret-down"></i></th>
                <th>OrderID</th>
                <th onClick={() => this.handleColumnHeaderClick("rName") }>Restaurant <i className="fas fa-caret-up"></i><i className="fas fa-caret-down"></i></th>
                <th onClick={() => this.handleColumnHeaderClick("total") }>Total <i className="fas fa-caret-up"></i><i className="fas fa-caret-down"></i></th>
                <th/>
              </tr>
            </thead>
            <tbody>
            {contentKeys.map(i =>
              <tr key={i}>
                <td>{this.props.myRestaurantsOrders[i].orderDate}</td>
                <td>{i}</td>
                <td>{this.props.myRestaurantsOrders[i].rName}</td>
                <td>${this.props.myRestaurantsOrders[i].total}</td>
                <td><button className="btn btn-light">Details</button></td>
              </tr>
            )}
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state =>({
    myRestaurantsOrders: state.orderReducer.myRestaurantsOrders
});

export default connect( mapStateToProps, { getMyRestaurantsOrders, setMyRestaurantsOrders } )(MyRestaurantsOrders);
