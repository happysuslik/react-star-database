import React, {Component} from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

import "./people-page.css";
import SwapiService from "./../../services/swapi-service";
import ErrorBoundary from "../error-boundry/error-boundary";

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedItemId: 2
    };

    onItemSelect = id => {
        this.setState({selectedItemId: id});
    };


    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }
        return (

            <div className="row mb2">
                <div className="col-md-6">
                    <ErrorBoundary>
                        <ItemList
                            onItemSelect={this.onItemSelect}
                            getData={this.swapiService.getAllPeople}>
                            {
                                (i) => (
                                    `${i.name} (${i.birthYear})`
                                )
                            }
                        </ItemList>
                    </ErrorBoundary>
                </div>
                <div className="col-md-6">
                    <ErrorBoundary>
                        <PersonDetails selectedPersonId={this.state.selectedItemId}/>
                    </ErrorBoundary>
                </div>
            </div>

        );
    }
}
