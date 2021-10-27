import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sites from "../pages/Sites";
import Users from "../pages/Users";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sites" exact component={Sites} />
        <Route path="/users" exact component={Users} />
      </Switch>
    </Router>
  );
};

export default Routes;
