import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Welcome from "./containers/Welcome";
import SpotifyLoginResponse from "./containers/SpotifyLoginResponse";

export default () =>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/welcome" exact component={Welcome}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/spotifyloginresponse" exact component={SpotifyLoginResponse}/>
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
