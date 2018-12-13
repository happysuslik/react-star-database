import React, {Component} from "react";
import Spinner from "../spinner";
import ErrorButton from "../error-button";

import "./item-details.css";
import ErrorBoundary from "../error-boundry/error-boundary";

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null,
        isLoading: false,
        isError: false
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem();
            this.setState({isLoading: true});
        }
    }

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    isLoading: false
                })
            })
    }

    render() {
        const {item, image, isLoading, isError} = this.state;
        const loader = isLoading && !isError ? <Spinner/> : <span>Select a item from a list</span>;

        if (!item) {
            return <span>{loader}</span>;
        }

        const {name} = item;

        return (
            <ErrorBoundary>
                <div className="card border-secondary mb-3">
                    <div className="card-header bg-transparent border-secondary">Details</div>
                    <div className="card-body text-dark">
                        <div className="item-details card">
                            <img
                                className="item-image"
                                src={image}
                                alt="item"
                            />

                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <ul className="list-group list-group-flush">
                                    {
                                        React.Children.map(this.props.children, (child) => {
                                            return React.cloneElement(child, {item});
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-transparent border-secondary d-flex justify-content-between">
                        <span>Test generation error button</span>
                        <ErrorButton/>
                    </div>
                </div>
            </ErrorBoundary>
        );
    }
}
