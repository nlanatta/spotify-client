import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

export default class SpotifyLoginResponse extends Component { 

  getFrom(match) {
    const paramKeys = Object.keys(match.params)

    paramKeys.forEach( (item) => {
      console.log(item);
    });
    return "";
  }

  render() {
    return (
      <Redirect
          from={this.getFrom}
          to={{
            pathname: "/welcome",
            //state: { code: this.state.code}
          }}
        />
    );
  }
}
