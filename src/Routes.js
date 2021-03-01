import { Switch, Route } from 'react-router-dom';

import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Details } from 'pages/Details';

export const RoutesComponent = () => {
  // created the home page and dynamic pages based on character ID
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/character/:id" exact>
        <Details />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
