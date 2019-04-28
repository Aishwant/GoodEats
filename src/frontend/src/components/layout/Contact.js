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
                        <p>Hi. I am working on this project</p>
                        <div class="social-icons"> 
                            <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                            <a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                            <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
                            <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        )
    }

}

export default Contact;