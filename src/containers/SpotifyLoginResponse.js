import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';

export default class SpotifyLoginResponse extends Component { 

  constructor(props) {
    super(props);
    const parsed = queryString.parse(props.location.search);
    this.state = {
      code: parsed.code
    } 
  }

  render() {
    return (
      <Redirect
          to={{
            pathname: "/welcome",
            state: this.state
          }}
        />
    );
  }
}
