import React, { Component } from 'react'
import {Tabs,Tab,Button} from 'react-bootstrap';

export default class TabDriver extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = { key: 'newOrder' };
    }

    /* Define render card function. Takes nextKey parameter that controls what tab the Accept button will navigate to */
    renderCard(currentOrder) {
        return (<div class="card" style={{width:'100%',borderRadius:'2%', border: '4px solid lightgreen'}}>
            <div class="card-body" style={{textAlign:'center'}}>
                <h4 class="card-title">CID</h4>
                <p class="card-text"><h5>RID</h5></p>
                <Button variant="outline-success" onclick="this.value='Close Curtain'" type="button" value="Open Curtain" id="myButton1" />
                
                <Button variant="outline-primary" style={{width:'33%'}}><i class="fas fa-book-open fa-lg" fa-lg></i><br/>View</Button>
            </div>
        </div>)
    }

    render() {
        return (
            <Tabs
            id="controlled-tab-example"
            activeKey={this.state.key}
            onSelect={key => this.setState({ key })}>
            <Tab eventKey="newOrder" title="New Order">
                <div class="container">
                { /* Render card, and specify which tab the card's accept button will navigate to */ }
               
                </div>
            </Tab>
            <Tab eventKey="currentOrder" title="Current Order">
                <div class="container">
                { /* Render card if this tab visible */ }
                { this.renderCard('currentOrder') }
                </div>
            </Tab>
            <Tab eventKey="orderHistory" title="OrderHistory">
                <div class="container">
                { /* Render card if this tab visible */ }
             
                </div>
            </Tab>
            </Tabs>
        )
    }
}