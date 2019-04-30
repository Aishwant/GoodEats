import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/main.css';


export class Contact extends Component{

    render(){
        return (
            <section className="Material-contact-section section-padding section-dark">
                <div className="container" style={{marginTop: '3%'}}>
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="section-title">Love to Hear From You</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p>If you have any issues with using our website please leave us a message below</p>
                        </div>
                    </div>
                    <div>
                        <p>-The Debug Thugs</p>
                    </div>
                </div>
                <div className="container">
                    <div className="col_md-8"></div>
                    <div className="col-md-6 mt-12">
                   <form className="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                        <div className="form-group label-floating">
                            <label className="control-label" for="name">Name</label>
                            <input className="form-control" id="name" type="text" name="name" required data-error="Please enter your name"></input>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div classname="form-group label-floating">
                            <label className="control-label" for="email">Email</label>
                            <input className="form-control" id="email" type="email" name="email" required data-error="Please enter your Email"></input>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group label-floating">
                            <label for="message" className="control-label">Message</label>
                            <textarea className="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-submit mt-5">
                            <button className="btn btn-primary" type="button" id="form-submit">
                            <Link to='/home' style={{color: 'white'}}>Send Message</Link>
                            </button>    
                        </div>
                    </form>
                </div>
                </div>
            </section>
        )
    }

}

export default Contact; 