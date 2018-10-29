import React, { Component } from "react";

import AppHeader from "../header";
import RandomPlanet from "../random-planet";

import PeoplePage from "./../people-page/people-page";
import "./app.css";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <AppHeader />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}
