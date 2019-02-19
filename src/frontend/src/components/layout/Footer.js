import React, { Component } from 'react'

export class Footer extends Component{

    render(){
        return (
            <div style={footerStyle}>
                Footer Goes here<br />
            <center>@Copyright <b>Debug Thugs</b></center>
            </div>
        )
    }

}

const footerStyle = {
    backgroundColor: '#cfcfcf'
}

export default Footer;