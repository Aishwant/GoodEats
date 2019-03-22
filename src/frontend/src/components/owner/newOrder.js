import React, { Component } from 'react'
import { connect } from 'react-redux';

export class newOrder extends Component{

render(){
    return(

        <div>
        <row>


        <div>
            <h1 >These are your orders list </h1> 
        </div>
        <div className="card" style={{width:'100px',height:'100px',backgroundColor:'red'}}>
        
        </div>

        <div className="card" style={{width:'100px',height:'100px',backgroundColor:'pink'}}>
        </div>




        </row>
       
        </div>
    )
}
    }

export default newOrder