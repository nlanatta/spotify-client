import React, { Component } from "react";
import postal from 'postal';

export default class EditUserDataEndpoint extends Component {
    constructor() {
        super();
        this.state = {};
    }

    removeDuplicateTracks(i, t) {
        let id = i;
        let tracks = t;
        let url = '/removeDuplicateTracks';
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
              "id": id,
              "tracks": tracks
            })
         })
          .then(results => {
              return results.json();        
         }).then((resource) => {           
              console.log(resource);
              var channel = postal.channel("spotify");
              channel.publish("user.removeTracks", resource);
         }).catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message);
        });
    }
}