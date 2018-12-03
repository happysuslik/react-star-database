import {Component} from "react";
import Spinner from "../spinner";
import React from "react";

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            isLoading: true
        };

        componentDidMount() {
            this.props.getData()
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