import React, { Component } from 'react'
import { connect } from 'react-redux';
import DeliveryHistoryCard from "./DeliveryHistoryCard";

export default class DriverDeliveryHistory extends Component {
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
            PrepInsruction:"Spicy",
            RID:"C",
            Status:"",
            Total:""
        }
      ]
    }
  } 

render(){
    let historyCard = this.state.Orderslist.map(order => {
        return (
          
            <DeliveryHistoryCard  indOrder={order}/> 
           
            
        
        )
      })



    return(

        <div>
            <ul class="list-group">

                {historyCard}
        
            </ul>
        </div>
    )
}
}

