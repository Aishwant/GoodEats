import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/main.css';


export class Contact extends Component{

    render(){
        return (
           <div style="text-align">
           <h1>Contact Us</h1>
           <div class="col-md-4 team-box">
           <div class="team-img thumbnail">
                    <img src="https://images.pexels.com/photos/567459/pexels-photo-567459.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
                    <div class="team-content">    
                        <h3>David Smith</h3>
                        <div class="border-team"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
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