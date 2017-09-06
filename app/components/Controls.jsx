import React ,{ Component } from 'react';

class Controls extends Component {

  render() {
    const { CountdownStatus } = this.props;
    var renderStartStopButton =() => {
      if(CountdownStatus === 'started') {
        return <button className="button secondary">Pause</button>
      } else if (CountdownStatus === 'paused') {
        return <button className="button primary">Start</button>
      }
    }
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    )
  }
}

Controls.propTypes= {
  CountdownStatus: React.PropTypes.string.isRequired
}

module.exports = Controls;
