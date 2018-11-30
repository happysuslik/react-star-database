import React, {Component} from "react";

import AppHeader from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import ItemDetails, {Record} from "../item-details/item-details";
import Row from "../row/row";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
    swapiService = new SwapiService();

    render() {
        const {
            getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage
        } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>

                <Record field="gender" label="Gender"/>
                <Record field="eyeColor" label="Eye Color"/>

            </ItemDetails>
        );
        const starShipDetails = (
            <ItemDetails
                itemId={13}
                getData={getStarship}
                getImageUrl={getStarshipImage}>
                <Record field="model" label="Model"/>
                <Record field="length" label="Length"/>
                <Record field="cost" label="Cost"/>
            </ItemDetails>
        );

        return (
            <div className="container">
                <AppHeader/>
                <RandomPlanet/>
                <Row
                    left={personDetails}
                    right={starShipDetails}/>
            </div>
        );
    }
}
