import React, { Component } from "react";
import "./PlayLists.css";
import UserDataEndpoint from "../endpoint/UserDataEndpoint";
import postal from 'postal';
import RouteNavItem from "../components/RouteNavItem";
import RemovedFiles from "../containers/RemovedFiles";
import Route from "react-router-dom/Route";

export default class PlayLists extends Component { 

  constructor(props) {
    super(props);    
    this.clearState(props);
  }

  clearState(props) {
    this.state = {
    } 
  }

  componentDidMount() {
    this.getUserPlayLists();    
  }

  getUserPlayLists() {
    let userDataEndpoint = new UserDataEndpoint();
    var channel = postal.channel("spotify");
    var subscription = channel.subscribe("user.playlists", this.handleResponse.bind(this));
    let u = userDataEndpoint.userPlayListsCall(this.props.match.params.id);
  }

  handleResponse(lists, envelope) {
    if(lists == undefined) {
        lists = [];
    }
    let duplicates = [];
    let all = [];
    for (let item of lists) {
      console.log(item.name);
      console.log(item.id);
      for (let track of item.tracks.items) {
        if(all.some(i => i.track.id == track.track.id)) {
          duplicates.push(track.track);
        }
        all.push(track);        
      }
    }
    this.setState({ 
      lists: lists,
      duplicates: duplicates,
      path: "/removeTracksDuplicates/"+this.props.match.params.id
    });
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>User Lists</h1>

          <ul>
          {
            this.state.lists != undefined ? this.state.lists.map(
              (itemList, index) => {
                      return (
                        <ul>
                           {itemList.name}
                           {itemList.tracks.items.map(  
                              (item)=><li>{item.track.name}</li>
                           )}
                           <br/>
                        </ul>  
                        
                      )
                    }
              ) : ""
          }        
          </ul>
          <ul>
            DUPLICATES
          {
            this.state.duplicates != undefined ? this.state.duplicates.map(
              (itemList, index) => {
                      return (
                        <li>
                           {itemList.name}
                        </li>  
                        
                      )
                    }
              ) : ""              
          }   
          {
            this.state.duplicates != undefined ? 
            ( 
              this.state.duplicates.length > 0 ? 
                (
                  <RouteNavItem key={1} href={this.state.path} tracks={this.state.duplicates}>
                    Remove Tracks Duplicates
                  </RouteNavItem>
                ) : ""
              ) : "" 
            }
          </ul>

         </div>
      </div>
    );
  }
}
