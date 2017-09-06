import React, { Component } from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

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
        case 'stopped':
          this.setState({count:0});
          break;
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
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
  handleStatusChange(newStatus) {
    this.setState({CountdownStatus: newStatus});
  }
  render() {
    var { count,CountdownStatus } = this.state;

    const renderControlArea = () => {
      if (CountdownStatus !== 'stopped') {
        return <Controls CountdownStatus={CountdownStatus} onStatusChange={this.handleStatusChange.bind(this)} />
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)} />
      }
    }

    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
}

module.exports = Countdown;
