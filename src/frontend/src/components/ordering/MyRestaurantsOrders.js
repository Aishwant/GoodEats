import React, { Component } from 'react'
import { orderBy } from "lodash"

export class MyRestaurantsOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
          orders: {'aecda544-4e30-4d67-9c11-a778542d790f': {
            driverFName: 'Jordan',
            items: {
              '4a4a8461-6817-49d6-9511-04ead0025ce6': {
                Description: 'Drink',
                Instructions: '',
                Name: 'Coke',
                Price: '10.00',
                Quantity: 1,
                owner_ID: '7tXRHUVp2uNScdBm1gwHrmDdoB92',
                rID: '1af1f842-5320-4868-866f-686ff5973180'
              }
            },
            orderDate: '4/23/2019',
            orderDeliveredTime: '5:10:10 PM',
            orderTime: '11:26:39 AM',
            owner_ID: '7tXRHUVp2uNScdBm1gwHrmDdoB92',
            rAddress: 'Square',
            rCity: 'Oxford',
            rID: '1af1f842-5320-4868-866f-686ff5973180',
            rName: 'Boure',
            rZipcode: '38655',
            status: 'DELIVERED',
            total: '10.0',
            uID: 'JrwcgEPy9vfveumRiYxhL7IEsuQ2',
            user_info: {
              customerAddress1: '123',
              customerAddress2: '',
              customerCity: 'Oxford',
              customerFName: 'Test',
              customerLName: 'Customer',
              customerZipcode: '38655'
            }
          },
          'e200106d-80ac-4254-9d3d-f1a4f712ae07': {
            driverFName: 'Jordan',
            items: {
              'fe52db0a-869d-405c-8ddb-e6471752c7c6': {
                Description: 'spicy or mild',
                Instructions: '',
                Name: '5pc Tenders',
                Price: '7.99',
                Quantity: 1,
                owner_ID: '7tXRHUVp2uNScdBm1gwHrmDdoB92',
                rID: '1b9b5f71-46b5-44a5-a0b0-1680357ea8b3'
              }
            },
            orderDate: '4/21/2019',
            orderDeliveredTime: '11:50:08 AM',
            orderTime: '11:47:06 AM',
            owner_ID: '7tXRHUVp2uNScdBm1gwHrmDdoB92',
            rAddress: '123 Northgate',
            rCity: 'Oxford',
            rID: '1b9b5f71-46b5-44a5-a0b0-1680357ea8b3',
            rName: 'Popeyes',
            rZipcode: '38655',
            status: 'DELIVERED',
            total: '7.99',
            uID: 'JrwcgEPy9vfveumRiYxhL7IEsuQ2',
            user_info: {
              customerAddress1: '123',
              customerAddress2: '',
              customerCity: 'Oxford',
              customerFName: 'Test',
              customerLName: 'Customer',
              customerZipcode: '38655'
            }
          }},
          sortParams: {
            direction: undefined
          }
        };
      }

    handleColumnHeaderClick(sortKey) {
        const {
          orders,
          sortParams: { direction }
        } = this.state;

        const sortDirection = direction === "desc" ? "asc" : "desc";

        const sortedCollection = orderBy(
            orders,
            [sortKey],
            [sortDirection]
          );

        this.setState({ orders: sortedCollection, sortParams: {direction: sortDirection} });
    }

  render() {
    const contentKeys = Object.keys(this.state.orders);
    {if(contentKeys.length === 0){
      return(
          <div className="container mt-3">
              <h2>You Have No Orders</h2>
          </div>
      )
    }}
    return (
        <div className="container mt-3">
        <h2>My Orders</h2>
        <table className="table table-striped">
            <thead>
              <tr>
                <th onClick={() => this.handleColumnHeaderClick("orderDate") }>Date</th>
                <th onClick={() => this.handleColumnHeaderClick("OrderID") }>OrderID</th>
                <th onClick={() => this.handleColumnHeaderClick("rName") }>Restaurant</th>
                <th onClick={() => this.handleColumnHeaderClick("total") }>Total</th>
                <th/>
              </tr>
            </thead>
            <tbody>
            {contentKeys.map(i =>
              <tr>
                <td>{this.state.orders[i].orderDate}</td>
                <td>{i}</td>
                <td>{this.state.orders[i].rName}</td>
                <td>${this.state.orders[i].total}</td>
                <td><button className="btn btn-light">Details</button></td>
              </tr>
            )}
            </tbody>
        </table>
      </div>
    )
  }
}

export default MyRestaurantsOrders;
