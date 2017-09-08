// Set up your application entry point here...
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import configStore from './store/configStore';
import App from './containers/App';

const rocketStore = configStore();

render(
  <Provider store={rocketStore}>
    <div className ="container">
      <App/>
    </div>
  </Provider>
,
  document.getElementById('app')
);
