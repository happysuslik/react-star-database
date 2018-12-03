import ItemDetails, {Record} from "../item-details/item-details";
import React from "react";
import {withSwapiService} from '../hoc-helpers';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="cost" label="Cost"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
  return {
      getData: swapiService.getStarship,
      getImageUrl: swapiService.getStarshipImage
  }
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
