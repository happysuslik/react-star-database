import React, { Component } from "react";

import AppHeader from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./app.css";

export default class App extends Component {
  state = {
    selectedItemId: 1
  };

  onItemSelect = id => {
    this.setState({
      selectedItemId: id
    });
  };

  render() {
    return (
      <div className="container">
        <AppHeader />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelect={this.onItemSelect} />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedPersonId={this.state.selectedItemId} />
          </div>
        </div>
      </div>
    );
  }
}
