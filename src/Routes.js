import { Switch, Route } from 'react-router-dom';

import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Details } from 'pages/Details';

export const RoutesComponent = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/people/:id" exact>
        <Details />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
