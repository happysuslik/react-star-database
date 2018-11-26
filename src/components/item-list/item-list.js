import React, { Component } from "react";

import "./item-list.css";
import Spinner from "../spinner";

export default class ItemList extends Component {
  state = {
    itemList: null,
    isLoading: true,
    isError: false
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then(itemList => {
        this.setState({ itemList, isLoading: false });
      })
      .catch(err => {
        this.onError(err);
      });
  }

  onError(err) {
    this.setState({ isError: true, isLoading: false });
  }

  renderItems(arr) {
    return arr.map(item => {
      const { id } = item;
      const label = this.props.children(item);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelect(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return (
      <div>
        <ul className="item-list list-group">{items}</ul>
      </div>
    );
  }
}
