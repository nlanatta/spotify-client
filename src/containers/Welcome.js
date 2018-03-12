import React, { Component } from "react";
import "./Welcome.css";
import UserDataEndpoint from "../endpoint/UserDataEndpoint";
import RouteNavItem from "../components/RouteNavItem";
import Routes from '../Routes';

export default class Welcome extends Component { 

  constructor(props) {
    super(props);    
    this.clearState(props);
  }

  clearState(props) {
    this.state = {
      code: props.location.state.code,
      id: "",
      email: "",
      birthdate: "",
      uri: "",
      imageUrl: ""
    } 
  }

  componentDidMount() {
    this.getUserData();    
  }

  getUserData() {
    let userDataEndpoint = new UserDataEndpoint();
    let code = this.state.code;
    let u = userDataEndpoint.userDataCall(this, code);
  }

  handleResponse(user) {
    if(user == undefined) {
      user = {
        id: "",
        email: "",
        birthdate: "",
        uri: "",
        imageUrl: ""
      }
      user.imageUrl = [{url:""}];
    }
    this.setState({ 
      id: user.id,
      email: user.email,
      birthdate: user.birthdate,
      uri: user.uri,
      imageUrl: user.images[0].url
    });
    this.props.id = this.state.id;
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>User Profile</h1>
          <p>User: {this.state.id}</p>
          <p>Birthdate: {this.state.birthdate}</p>
          <p>Email: {this.state.email}</p>
          <p>Uri: {this.state.uri}</p>
          <img src={this.state.imageUrl} />
        </div>
        <RouteNavItem key={1} href="/playlists" >
          PlayLists
        </RouteNavItem> 
        <Routes childProps={this.props}/>
      </div>
    );
  }
}
