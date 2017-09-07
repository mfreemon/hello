// Set up your application entry point here...
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

render(
  <div className ="container">
    <App/>
  </div>,
  document.getElementById('app')
);
