import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeRackbot from "./LandingPage";
import SolServicio from "./SolServicio";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomeRackbot} />
      <Route exact path="/agendar" component ={SolServicio} />
    </Switch>
  );
}
