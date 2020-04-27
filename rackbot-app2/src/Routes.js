import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeRackbot from "./LandingPage";
import SolServicio from "./SolServicio";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomeRackbot />
      </Route>
      <Route exact path="/agendar">
        <SolServicio />
      </Route>
    </Switch>
  );
}
