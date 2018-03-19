import React, { Component } from "react";
import postal from 'postal';

export default class LoaderEndpoint extends Component {
    constructor() {
        super();
    }

    loginCall() {
      fetch('/login', {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }        
       })
        .then(results => {
            return results.json();        
       }).then((resource) => {           
            console.log(resource);
            var channel = postal.channel("spotify");
            channel.publish("user.url", resource);
       }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
      });
    }
}