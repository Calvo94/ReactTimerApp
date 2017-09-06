import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import CountdownForm from 'CountdownForm';

var expect= require('expect');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist;
  })

  it ('should call onSetCountdown if valid seconds entered', () => {
    var createSpy = expect.createSpy();
    var countdownForm= TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={createSpy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value='109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(createSpy).toHaveBeenCalledWith(109);
  });

  it ('should not call onSetCountdown if not valid seconds entered', () => {
    var createSpy = expect.createSpy();
    var countdownForm= TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={createSpy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value='109b';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(createSpy).toNotHaveBeenCalled();
  });
});
