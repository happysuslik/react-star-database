import React, {Component} from "react";

import AppHeader from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import Row from "../row/row";
import SwapiService from "../../services/swapi-service";

import {
    PersonList,
    StarshipList,
    PlanetList,
    PersonDetails,
    StarshipDetails,
    PlanetDetails
} from '../sw-components';
import ErrorBoundary from "../error-boundry/error-boundary";

export default class App extends Component {
    swapiService = new SwapiService();

    render() {
        return (
            <div className="container">
                <AppHeader/>
                <RandomPlanet/>

                <ErrorBoundary>
                    <Row left={
                        <PersonList />
                    } right={<PersonDetails itemId={22}/>}/>
                </ErrorBoundary>
            </div>
        );
    }
}
