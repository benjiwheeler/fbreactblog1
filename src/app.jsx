import React from 'react';

import { render } from 'react-dom';

import Ben from './ben.jsx';
import Menu from './menu.jsx';
import Index from './index.jsx';

import { Router, browserHistory, Route, IndexRoute } from 'react-router';

render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Menu} >
        <IndexRoute component={Index} />
        <Route path="ben" component={Ben} />

      </Route>
    </Router>
  ),
  document.getElementById('app')
);


