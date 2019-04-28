import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/main.css';


export class Contact extends Component{

    render(){
        return (
           <div>
           <h1>Contact Us</h1>
           <div class="col-md-4 team-box">
           <div class="team-img thumbnail">
                    <div class="team-content">    
                        <h3>David Smith</h3>
                        <div class="border-team"></div>
                        <p>Hi I am working on this project.</p>
                    </div>
                </div> 
            </div>
        </div>
        )
    }

}

export default Contact;