import React, { Component } from "react";
import SwapiService from "./../../services/swapi-service";

import "./item-list.css";
import Spinner from "../spinner";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: [],
    isLoading: true,
    isError: false
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(peopleList => {
        this.setState({ peopleList, isLoading: false });
      })
      .catch(err => {
        this.onError(err);
      });
  }

  onError(err) {
    this.setState({ isError: true, isLoading: false });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelect(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;
    const items = this.renderItems(peopleList);

    if (!peopleList) {
      return <Spinner />;
    }
    return (
      <div>
        <ul className="item-list list-group">{items}</ul>
      </div>
    );
  }
}
