import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/main.css';


export class Footer extends Component{

    render(){
        return (
            <footer className="footerStyle">
                <div className="container" style={{marginTop:'70px'}}>
                    <div className="row mb-5">
                        <div className="col-md-4  text-center">
                            <h4>GoodEats</h4>
                            <p>We are here to help you. Don't worry about going to a restaurant and ordering when we can bring it to your doorsteps.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <h4>Team Members</h4>
                            <p>Aishwant Ghimire</p>
                            <p>Andrew Jelson</p>
                            <p>Jason Wells</p>
                            <p>Jordan Kutz</p>
                            <p>Madhav Prasad Koirala</p>
                        </div>
                        <div className="col-md-4  text-center" style={{marginTop:"5%"}}>
                            <Link to="/home" style={{color:"#fff"}}>Home</Link> | <Link to="" style={{color:"#fff"}}>About</Link> | <Link to="" style={{color:"#fff"}}>Contact</Link>
                        </div>
                    </div>
                <div className="row" style={{marginBottom:'70px'}}>
                <div className="col-md-12 text-center">
                    <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | A joint effort by Debug Thugs</p>
                </div>
                </div>
                </div>
            </footer>
        )
    }

}

export default Footer;