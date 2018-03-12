import React, { Component } from "react";
import "./PlayLists.css";
import UserDataEndpoint from "../endpoint/UserDataEndpoint";

export default class PlayLists extends Component { 

  constructor(props) {
    super(props);    
    this.clearState(props);
  }

  clearState(props) {
    this.state = {
    } 
  }

  componentDidMount() {
    this.getUserPlayLists();    
  }

  getUserPlayLists() {
    let userDataEndpoint = new UserDataEndpoint();
    let u = userDataEndpoint.userPlayListsCall(this);
  }

  handleResponse(lists) {
    if(lists == undefined) {
        lists.items = [];
    }
    console.log(lists.items);
    this.setState({ 
    });
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>User Lists</h1>
        </div>
      </div>
    );
  }
}
