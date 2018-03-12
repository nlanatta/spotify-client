import React, { Component } from "react";
export default class UserDataEndpoint extends Component {
    constructor() {
        super();
        this.state = {};
    }

    userDataCall(ownerCallback,code) {
        let selfCalllback = ownerCallback;
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
              selfCalllback.handleResponse(resource);
         }).catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message);
        });
    }

    userPlayListsCall(ownerCallback) {
        let selfCalllback = ownerCallback;
        let p = ownerCallback.props !== undefined ? ownerCallback.props : {};
        let id = p !== undefined ? p.id : "";
        let url = '/userPlayLists?userId='+p.id;
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
              selfCalllback.handleResponse(resource);
         }).catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message);
        });
    }
}