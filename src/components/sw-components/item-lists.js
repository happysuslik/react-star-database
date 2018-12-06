import React from 'react';
import ItemList from '../item-list';
import {compose, withChildFunction, withData, withSwapiService} from '../hoc-helpers';

const renderName = ({name}) => <span>{name}</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};

const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

export {
    PersonList,
    StarshipList,
    PlanetList
};
