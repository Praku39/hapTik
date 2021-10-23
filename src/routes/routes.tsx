import { Component } from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import HomePage from '../modules/HomePage';
import history, { ROUTING_PATHS } from './history';

class Routes extends Component {
  render(): JSX.Element {
    return (
        <BrowserRouter>
          <Router history={history}>
            <Switch>
              <Route exact path={ROUTING_PATHS.index} component={HomePage} />  
            </Switch>
          </Router>
        </BrowserRouter>
    );
  }
}

export default Routes;
