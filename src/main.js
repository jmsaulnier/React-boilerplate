require('es6-object-assign').polyfill()

import DOMReady from 'detect-dom-ready'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App';

DOMReady(function() {
  ReactDOM.render(<App />, document.getElementById('app'))
})
