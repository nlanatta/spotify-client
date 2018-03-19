import React, { Component } from "react";
import "./Welcome.css";
import RouteNavItem from "../components/RouteNavItem";
import Routes from '../Routes';
import postal from 'postal';
import EditUserDataEndpoint from "../endpoint/EditUserDataEndpoint";

export default class RemovedFiles extends Component { 

  constructor(data, props) {
    super(props);    
    this.state = {
      data: data
    };
  }

  componentDidMount() {
    this.removeTracks();    
  }

  removeTracks() {
    let endpoint = new EditUserDataEndpoint();
    let id = "";

    var channel = postal.channel("spotify");
    var subscription = channel.subscribe("user.removeTracks", this.handleResponse.bind(this));

    let u = endpoint.removeDuplicateTracks(id);
  }

  
  handleResponse(data, envelope) {

  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Files Removed</h1>
        </div>
      </div>
    );
  }
}
