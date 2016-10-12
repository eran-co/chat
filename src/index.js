/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { getRoutes } from './routes';
import configureStore from './store/configureStore';
import { loginSucceded } from './actions/authActions';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();

const token = localStorage.getItem('token');
if (token !== null) {
  store.dispatch(loginSucceded(token));
}

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
render(
  <Provider store={store}>
    <Router history={history} routes={getRoutes(store)} />
  </Provider>, document.getElementById('app')
);
