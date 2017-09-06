import React, { Component } from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

class Countdown extends Component {
  state={
    count:0,
    CountdownStatus: 'stopped',
  };
  componentDidUpdate(prevProps, prevState) {
    if(this.state.CountdownStatus !== prevState.CountdownStatus) {
      switch (this.state.CountdownStatus) {
        case 'started':
          this.startTimer();
          break;
        default:

      }
    }
  }
  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count -1;
      this.setState({
        count : newCount >0 ? newCount : 0
      });
    },1000);
  }
  handleSetCountdown(seconds){
    this.setState({count:seconds, CountdownStatus: 'started'})
  }
  render() {
    var { count } = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)} />
      </div>
    );
  }
}

module.exports = Countdown;
