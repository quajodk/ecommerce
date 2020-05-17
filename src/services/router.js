import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from '../components/pages/Home';
import ShopPage from '../components/pages/Shop';

const AppNavigator = () => (
  <>
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </Router>
  </>
);

export default AppNavigator;
