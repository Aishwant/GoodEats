import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DeliveryHistoryCard from "./DeliveryHistoryCard";

export class DriverCurrentOrders extends Component{

    constructor() {
        super();
        this.state = {
          Orderslist: [
            {
                OrderID:parseInt("001"),
              CID:123,
              DeliveryEst:"",
              DeliveryInstructions:"Door",
              DriverID:"",
              Orders:"ABC",
              DeliverrAdd: "1802 Jackson Avenue west, Apt 87, Oxford,MS, 38655",
              PrepInsruction:"Mild",
              RID:"A",
              Status:"",
              Total:""

            },
            {   
                OrderID:parseInt("002"),
                CID:456,
                DeliveryEst:"",
                DeliveryInstructions:"Front Door",
                DriverID:"",
                Orders:"BCD",
                DeliverrAdd: "1802 Jackson Avenue west, Apt 87, Oxford,MS, 38655",
                PrepInsruction:"Medium",
                RID:"B",
                Status:"",
                Total:""
            },
            {
                OrderID:parseInt("003"),
                CID:678,
                DeliveryEst:"",
                DeliveryInstructions:"Gate",
                DriverID:"",
                Orders:"DEF",
                DeliverrAdd: "1802 Jackson Avenue west, Apt 87, Oxford,MS, 38655",
                PrepInsruction:"Spicy",
                RID:"C",
                Status:"",
                Total:""
            }
          ]
        }
      } 

      showOrder(OrderID) {
       
        this.setState({ Orderslist: this.state.Orderslist.filter(currentOrder => currentOrder.OrderID !== OrderID )});
        
      }
    render(){
        let dCard = this.state.Orderslist.map(currentOrder => {
            return (
              
                <delivery keyNew={currentOrder.OrderID} passCurrentOrder={currentOrder}/>
               
            )
          })



        return(

            <div>
                <ul class="list-group">
                
                    {dCard}
            
                </ul>
            </div>
        )
    }
}

export default DriverCurrentOrders;