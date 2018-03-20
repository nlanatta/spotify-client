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
      success: false
    }
  }

  componentDidMount() {
    this.removeTracks();    
  }

  removeTracks() {
    let endpoint = new EditUserDataEndpoint();
    let id = this.props.match.params.id;
    let tracks = this.props.extraData();

    var channel = postal.channel("spotify");
    var subscription = channel.subscribe("user.removeTracks", this.handleResponse.bind(this));

    let u = endpoint.removeDuplicateTracks(id, tracks);
  }

  
  handleResponse(data, envelope) {
    console.log(data);
    this.setState(
      {
        success: data
      }
    );
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Files Removed</h1>
          {this.state.success ? "SUCCESS REMOVED" : ""}
        </div>
      </div>
    );
  }
}
