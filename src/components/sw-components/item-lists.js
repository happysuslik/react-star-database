import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService} from '../hoc-helpers';

/**
 * Композиция компонента высшего порядка
 * @param Wrapped
 * @param fn
 * @returns {function(*): *}
 */
const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>{fn}</Wrapped>
        )
    }
};

const renderName = ({ name }) => <span>{name}</span>;

const ListWithChildren = withChildFunction(ItemList, renderName);

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

const PersonList = withSwapiService(withData(ListWithChildren), mapPersonMethodsToProps);

const StarshipList = withSwapiService(withData(ListWithChildren), mapStarshipMethodsToProps);

const PlanetList = withSwapiService(withData(ListWithChildren), mapPlanetMethodsToProps);

export {
    PersonList,
    StarshipList,
    PlanetList
};
