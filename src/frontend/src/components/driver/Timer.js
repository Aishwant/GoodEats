import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
          time: 0,
          seconds: 0,
          minutes: 0,
          hours: 0
        }

        this.startTimer = this.startTimer.bind(this)
    }

    componentDidMount(){
        this.startTimer();
    }

    startTimer() {
        this.setState({
          time: this.state.time,
          start: this.props.start,
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start,
            hours: Math.floor((this.state.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((this.state.time % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((this.state.time % (1000 * 60)) / 1000)
        
        }), 1000);
    }

  render() {
    return (
      <div style={timeStyle}>
        <h2>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</h2>
      </div>
    )
  }
}

const timeStyle={
    marginTop: "8%"
}
