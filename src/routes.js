import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MainPage from './containers/MainPage';
import LoginPage from './containers/LoginPage';
import NotFoundPage from './components/NotFoundPage.js';



export function getRoutes(store) {
  const requireAuth = (nextState, replace) => {
    if (!store.getState().auth.token) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  };

  return (
    <Route path="/" component={App}>
      <IndexRoute component={MainPage} onEnter={requireAuth}/>
      <route path="/login" component={LoginPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  );
}



