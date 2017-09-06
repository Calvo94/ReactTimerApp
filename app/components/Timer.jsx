import React, { Component } from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';


class Timer extends Component {
  state={
    count:0,
    timerStatus: 'paused',
  };

  componentDidUpdate(prevProps, prevState) {
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count:0,timerStatus:'paused'});
          break;
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
        default:

      }
    }
  };

  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count : newCount
      });
    },1000);
  }

  onStatusChange(newStatus) {
    this.setState({timerStatus: newStatus});
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer= undefined;
  }

  render() {
    var { count,timerStatus } = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls CountdownStatus={timerStatus} onStatusChange={this.onStatusChange.bind(this)} />
      </div>
    )
  }
}

module.exports = Timer;
