import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import Controls from 'Controls';

var expect= require('expect');

describe('Controls', () => {
  it('should existe',() => {
    expect(Controls).toExist();
  })

  describe('render', () => {
    it('should render Pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls CountdownStatus="started"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });
    it('should render Start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls CountdownStatus="paused"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Start)');

      expect($pauseButton.length).toBe(1);
    })

  })
})
