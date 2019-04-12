import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';



export default class RestaurantCard extends Component{

    constructor(props) {
        super(props);
    } 

    render(){
        
        let { OrderID,CID,DeliveryEst,DeliveryInstructions,DriverID,Orders,PrepInsruction,RID,Status,Total } = this.props.indOrder;

        return(
            
            <div class="container">
                <div class="card" inverse style={{width:'17rem',borderRadius:'2%', border: '4px solid red'}}>
                    <div class="card-body" style={{backgroundColor:"#2A2828", textAlign:'center', color:"#FFFFFF"}}>
                        <h4 class="card-title">{CID}</h4>
                        <p class="card-text"><h5>{RID}</h5></p>
                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                    
                        <Button variant="outline-success"onClick={() => {this.props.removeOrder(OrderID)}} style={{width:'50%'}}><i class="fas fa-check-circle fa-lg"></i><br/>Accept</Button> 
                        <Button variant="outline-danger"onClick={() => {this.props.removeOrder(OrderID)}} style={{width:'50%'}}><i class="far fa-times-circle fa-lg" fa-lg></i><br/>Decline</Button>
                     
                        
                    </div>
                </div>
            </div>
        )
    }
}
