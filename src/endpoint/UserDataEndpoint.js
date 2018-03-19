import React, { Component } from "react";
import postal from 'postal';

export default class UserDataEndpoint extends Component {
    constructor() {
        super();
        this.state = {};
    }

    userDataCall(code) {
        let url = '/userData';
        let co = code;
        fetch(url, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({
            "code": co
          })   
         })
          .then(results => {
              return results.json();        
         }).then((resource) => {           
              console.log(resource);
              var channel = postal.channel("spotify");
              channel.publish("user.profile", resource);
         }).catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message);
        });
    }

    userPlayListsCall(i) {
        let id = i;
        let url = '/userPlayLists?userId='+id;
        fetch(url, {
          method: 'GET',
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
              channel.publish("user.playlists", resource);
         }).catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message);
        });
    }
}