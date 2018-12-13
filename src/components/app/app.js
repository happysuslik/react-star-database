import React, {Component} from "react";

import AppHeader from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";
import ErrorBoundary from "../error-boundry/error-boundary";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import StarshipDetails from "../sw-components/starship-details";
import SecretPage from "../pages/secret-page/secret-page";

import "./app.css";
import LoginPage from "../pages/login-page/login-page";

export default class App extends Component {
    swapiService = new SwapiService();
    state = {
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    };

    onLogout = () => {
        this.setState({
            isLoggedIn: false
        })
    };

    render() {
        const {isLoggedIn} = this.state;

        return (
            <SwapiServiceProvider value={this.swapiService}>
                <Router>
                    <div className="container">
                        <AppHeader isLoggedIn={isLoggedIn}/>
                        <ErrorBoundary>
                            <RandomPlanet/>
                        </ErrorBoundary>

                        <Switch>
                            <Route path="/"
                                   render={() => <h2>Welcome to StarDB</h2>}
                                   exact/>

                            <Route path="/people/:id?" component={PeoplePage}/>
                            <Route path="/planets" component={PlanetsPage}/>
                            <Route path="/starships" exact component={StarshipsPage}/>
                            <Route path="/starships/:id"
                                   render={({match}) => {
                                       const {id} = match.params;
                                       return <StarshipDetails itemId={id}/>
                                   }}/>
                            <Route path='/login'
                                   render={() => (
                                       <LoginPage
                                           isLoggedIn={isLoggedIn}
                                           onLogin={this.onLogin}
                                       />
                                   )}
                            />
                            <Route path='/logout'
                                   render={() => {
                                       this.onLogout();
                                       return <Redirect to="/"/>
                                   }}
                            />
                            <Route path='/secret'
                                   render={() => (
                                       <SecretPage isLoggedIn={isLoggedIn}/>
                                   )}
                            />

                            <Route render={() => <h2>Page not found</h2>}/>
                        </Switch>

                    </div>
                </Router>
            </SwapiServiceProvider>

        );
    }
}
