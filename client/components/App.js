import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../containers/HomePage';

const App = () => (
  <Router>
    <Switch>
      {/* <Route exact path="/" component={LoginPage} /> */}
      <Route path="/home" component={Homepage} />
    </Switch>
  </Router>
);

export default App;
