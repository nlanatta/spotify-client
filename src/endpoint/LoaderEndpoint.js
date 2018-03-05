import React, { Component } from "react";
export default class LoaderEndpoint extends Component {
    constructor() {
        super();
    }

    loginCall(c) {
      let callback = c;
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
            callback(resource);
       }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
      });
    }
}