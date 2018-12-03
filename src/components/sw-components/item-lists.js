import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services';

const swapiService = new SwapiService();
const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

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

const PersonList = withData(ListWithChildren, getAllPeople);

const StarshipList = withData(ListWithChildren, getAllStarships);

const PlanetList = withData(ListWithChildren, getAllPlanets);

export {
    PersonList,
    StarshipList,
    PlanetList
};
