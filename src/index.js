// Set up your application entry point here...
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

render(
  <div>
    <h1>Hello World</h1>
  </div>,
  document.getElementById('app')
);
