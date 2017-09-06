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
  };
  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count -1;
      this.setState({
        count : newCount >0 ? newCount : 0
      });
      if (newCount === 0){
        this.setState({CountdownStatus: 'stopped'});
      }
    },1000);

  }
  handleSetCountdown(seconds){
    this.setState({count:seconds, CountdownStatus: 'started'})
  }
  onStatusChange(newStatus) {
    this.setState({CountdownStatus: newStatus});
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer= undefined;
  }

  render() {
    var { count,CountdownStatus } = this.state;

    const renderControlArea = () => {
      if (CountdownStatus !== 'stopped') {
        return <Controls CountdownStatus={CountdownStatus} onStatusChange={this.onStatusChange.bind(this)} />
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)} />
      }
    }

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
}

module.exports = Countdown;
