import React, {Component} from "react";

import AppHeader from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";
import ErrorBoundary from "../error-boundry/error-boundary";
import {PeoplePage, StarshipsPage, PlanetsPage} from "../pages";

import {BrowserRouter as Router, Route} from 'react-router-dom';

import "./app.css";

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
                    <Router>
                        <div className="container">
                            <AppHeader onServiceChange={this.onServiceChange}/>
                            <RandomPlanet/>

                            <Route path="/"
                                   render={() => <h2>Welcome to StarDB</h2>}
                                   exact/>
                            <Route path="/people" component={PeoplePage} />
                            <Route path="/planets" component={PlanetsPage} />
                            <Route path="/starships" component={StarshipsPage} />

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
