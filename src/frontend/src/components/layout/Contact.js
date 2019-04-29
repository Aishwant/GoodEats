import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/main.css';


export class Contact extends Component{

    render(){
        return (
           <div>
           <h1 align="center">Contact Us</h1>
           <div className="col-md-4 team-box" className = "borderless">
           <div className="team-img thumbnail">
                    <div className="team-content" align="center">    
                        <h3>Jordan Kutz</h3>
                        <div className="border-team" align="center"></div>
                        <p>Hi. I am the project manager for our group.
                            Email me at jkutz@go.olemiss.edu
                        </p>
                        <br/>
                    </div>
                    <div className="team-content" align="center">    
                        <h3>Aishwant Ghimire</h3>
                        <div className="border-team" align="center"></div>
                        <p>Hi. I am the database man for our group.
                            Email me at aghimire@go.olemiss.edu
                        </p>
                        <br/>
                    </div>
                    <div className="team-content" align="center">     
                        <h3>Madhav Koirala</h3>
                        <div className="border-team" align="center"></div>
                        <p>Hi. I have worked on the functionality of the project.
                            Email me at mkoirala@go.olemiss.edunpm
                        </p>
                        <br/>
                    </div>
                    <div className="team-content" align="center">    
                        <h3>Jason Wells</h3>
                        <div className="border-team" align="center"></div>
                        <p>Hi. I am worked on implementing some unique components of this project.
                            Email me at jpwells1@go.olemiss.edu
                        </p>
                        <br/>
                    </div>
                    <div className="team-content" align="center">    
                        <h3>Andrew Jelson</h3>
                        <div className="border-team" align="center"></div>
                        <p>Hi. I am the server guy for our project.
                            Email me at arjelson@go.olemiss.edu
                        </p>
                        <br/>
                    </div>
                </div> 
            </div>
        </div>
        )
    }

}

export default Contact;