import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import Survey from "./containers/Survey";

const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/survey" component={Survey} />
  </Switch>
);

export default BaseRouter;
