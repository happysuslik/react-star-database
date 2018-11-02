import React, { Component } from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

import "./people-page.css";
import SwapiService from "./../../services/swapi-service";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItemId: 2,
    hasError: false
  };

  onItemSelect = id => {
    this.setState({
      selectedItemId: id
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelect={this.onItemSelect}
            getData={this.swapiService.getAllPeople}
            renderItem={({ name, gender, birthYear }) => (
              `${name} (${gender}, ${birthYear})`)}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails selectedPersonId={this.state.selectedItemId} />
        </div>
      </div>
    );
  }
}
