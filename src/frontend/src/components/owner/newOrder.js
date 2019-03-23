import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container } from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage,MDBIcon, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


export class newOrder extends Component{
render(){
    return(
        <div>
     
     <br/>
     <br/>
    
    
     <MDBCol>
      <MDBCard style={{ width: "100%" }}>
    
      <MDBCardTitle ><p class="text-center" style={{background:"#A9A9A9"}}><a style={{color:'white'}}>Your Order Tracker</a></p></MDBCardTitle>
        
        <MDBCardBody class="wrapper" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',gridGap:'3px',gridRowGap:'15px'}}>
            

        <MDBCol>
            <MDBCard style={{ width: "100%",borderRadius:"4%" }}>
 
                <MDBCardTitle ><p class="text-center" style={{background:"green"}} >New unaccepted Order</p></MDBCardTitle>
                <MDBCardBody>
                    

                <MDBCol>
                   <MDBCard className="card-image" style={{ backgroundImage: "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"}}>
                      <div className="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                       <div>
                         <h3><MDBIcon icon="shopping-basket" /> Order Type</h3>
                         <MDBCardTitle tag="h3" className="pt-2">
                         <strong>Customer Name</strong>
                         </MDBCardTitle>
              
                         
                         <span><MDBBtn><MDBIcon icon="clone left" /> View Order Details</MDBBtn></span>
                         <span><MDBBtn><MDBIcon icon="check circle" /> Confirm Order</MDBBtn></span>
                         <span><MDBBtn><MDBIcon icon="phone" /> Call Customer</MDBBtn></span>
                       </div>
                      </div> 
                   </MDBCard>
                </MDBCol>


                </MDBCardBody>
            </MDBCard>
        </MDBCol>

        <MDBCol>
            <MDBCard style={{ width: "100%",borderRadius:"3%" }}>
        
                <MDBCardTitle ><p class="text-center" style={{background:"red"}}>Pending Orders</p></MDBCardTitle>
                <MDBCardBody>

                     
                <MDBCol>
                   <MDBCard className="card-image" style={{ backgroundImage: "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"}}>
                      <div className="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                       <div>
                         <h3><MDBIcon icon="shopping-basket" /> Order Type</h3>
                         <MDBCardTitle tag="h3" className="pt-2">
                         <strong>Customer Name</strong>
                         </MDBCardTitle>
              
                         
                         <span><MDBBtn><MDBIcon icon="clone left" /> View Order Details</MDBBtn></span>
                         <span><MDBBtn><MDBIcon icon="check circle" /> Order Complete</MDBBtn></span>
                         <span><MDBBtn><MDBIcon icon="phone" /> Call Customer</MDBBtn></span>
                       </div>
                      </div> 
                   </MDBCard>
                </MDBCol>

                <MDBCol>
                   <MDBCard className="card-image" style={{ backgroundImage: "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"}}>
                      <div className="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                       <div>
                         <h3><MDBIcon icon="shopping-basket" /> Order Type</h3>
                         <MDBCardTitle tag="h3" className="pt-2">
                         <strong>Customer Name</strong>
                         </MDBCardTitle>
              
                         
                         <span><MDBBtn><MDBIcon icon="clone left" /> View Order Details</MDBBtn></span>
                         <span><MDBBtn><MDBIcon icon="check circle" /> Order Complete</MDBBtn></span>
                         <span><MDBBtn><MDBIcon icon="phone" /> Call Customer</MDBBtn></span>
                       </div>
                      </div> 
                   </MDBCard>
                </MDBCol>
                

         
                </MDBCardBody>
            </MDBCard>
        </MDBCol>





         
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

     </div>
     
 
    )
}
}


export default newOrder