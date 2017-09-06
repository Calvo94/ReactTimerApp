import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import Timer from 'Timer';

var expect= require('expect');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist;
  });

  it ('should start timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.onStatusChange('started');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
        expect(timer.state.timerStatus).toBe('started');
        expect(timer.state.count).toBe(1);
        done();

    }, 1001);
  });

  it ('should pause timer on paused status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count:5});
    timer.onStatusChange('started');
    timer.onStatusChange('paused');
    expect(timer.state.count).toBe(5);

    setTimeout(() => {
        expect(timer.state.timerStatus).toBe('paused');
        expect(timer.state.count).toBe(5);
        done();

    }, 1001);
  });
});
