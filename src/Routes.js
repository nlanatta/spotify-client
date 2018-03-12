import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Welcome from "./containers/Welcome";
import PlayLists from "./containers/PlayLists";
import SpotifyLoginResponse from "./containers/SpotifyLoginResponse";
import AppliedRoute from "./components/AppliedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps}/>
    <AppliedRoute path="/welcome" exact component={Welcome} props={childProps}/>
    <AppliedRoute path="/login" exact component={Login} props={childProps}/>
    <AppliedRoute path="/playlists" exact component={PlayLists} props={childProps}/>
    <AppliedRoute path="/spotifyloginresponse" exact component={SpotifyLoginResponse} props={childProps}/>
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
