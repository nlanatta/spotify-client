import React, { Component } from "react";
import "./Login.css";
import AppButton from "../components/AppButton";
import LoaderEndpoint from "../endpoint/LoaderEndpoint";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = result => {
    window.open(result, '_top', "Login Spotify", "channelmode=yes, height=400, width=600");
  }

  handleClick = event => {
    event.preventDefault();
    try {
       this.login();
    } catch (e) {
      alert(e);
    }
  }
  
  login() {
    console.log("LOGIN requested");
    var loginCall = new LoaderEndpoint();
    loginCall.loginCall(this.handleChange);    
  } 

  render() {
    return (
      <div className="Login">
        LOG IN SPOTIFY
        <div>
          <AppButton
            block
            bsStyle="primary"
            bsSize="large"
            onClick={this.handleClick}
            text="Login"
          /> 
        </div>     
      </div>
    );
  }
}
