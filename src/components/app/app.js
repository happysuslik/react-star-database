import React, {Component} from "react";

import AppHeader from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";
import ErrorBoundary from "../error-boundry/error-boundary";
import { PeoplePage, StarshipsPage, PlanetsPage } from "../pages";

export default class App extends Component {
    state = {
        swapiService: new SwapiService()
    };
    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            };
        });
    };

    render() {
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="container">
                        <AppHeader onServiceChange={this.onServiceChange}/>
                        <RandomPlanet/>
                        <PeoplePage/>
                        <StarshipsPage/>
                        <PlanetsPage/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
