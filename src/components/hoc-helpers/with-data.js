import {Component} from "react";
import Spinner from "../spinner";
import React from "react";

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
            isLoading: true
        };

        componentDidMount() {
            getData()
                .then(data => {
                    this.setState({data, isLoading: false});
                })
        };

        render() {
            const {data} = this.state;

            if (!data) {
                return <Spinner/>;
            }

            return <View {...this.props} data={data}/>;
        }
    };
};

export default withData;