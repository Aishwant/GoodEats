import React, { Component } from 'react'
import { connect } from 'react-redux';
import OrderHistoryCard from "./OrderHistoryCard";

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
    let orderCard = this.state.Orderslist.map(order => {
        return (

            <div class="container">

            <OrderHistoryCard  indOrder={order}/> 
            
            </div>

          
            
            
            
        
        )
      })



    return(

        <div class="container">
        <br/>
        < div style={{textAlign:'center'}}><h4>Your Orders History</h4></div>
        <br/>
     
            <ul class="list-group">
            
                {orderCard}
        
            </ul>
       
        </div>
    )
}
}

