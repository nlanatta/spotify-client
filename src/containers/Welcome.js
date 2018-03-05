import React, { Component } from "react";
import "./Welcome.css";
import UserDataEndpoint from "../endpoint/UserDataEndpoint";

export default class Welcome extends Component { 

  getUserData() {
    let userDataEndpoint = new UserDataEndpoint();
    let code = "";
    userDataEndpoint.userDataCall(code);
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Welcome to spotify</h1>
          <p>User: </p>
        </div>
      </div>
    );
  }
}
