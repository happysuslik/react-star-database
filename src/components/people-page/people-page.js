import React, {Component} from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorIndicator from "../error-indicator";

import "./people-page.css";
import SwapiService from "./../../services/swapi-service";
import ErrorBoundary from "../error-boundry/error-boundary";
import Row from "../row/row";



export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedItemId: 2
    };

    onItemSelect = id => {
        this.setState({selectedItemId: id});
    };


    render() {

        const itemList = (
            <ItemList
                onItemSelect={this.onItemSelect}
                getData={this.swapiService.getAllPeople}>
                {
                    (i) => (
                        `${i.name} (${i.birthYear})`
                    )
                }
            </ItemList>
        );

        const personDetails = (
            <ItemDetails itemId={this.state.selectedItemId}/>
        );

        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundary>
        );
    }
}
