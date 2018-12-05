import {Component} from "react";
import Spinner from "../spinner";
import React from "react";
import ErrorIndicator from "../error-indicator/error-indicator";

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            isLoading: true,
            isError: false
        };

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        componentDidMount() {
            this.update();
        };

        update() {
            this.setState({
                isLoading: true,
                isError: false
            });

            this.props.getData()
                .then(data => {
                    this.setState({data, isLoading: false, isError: false});
                })
                .catch(err => {
                    this.setState({isLoading: false, isError: true});
                })
        }

        render() {
            const {data, isLoading, isError} = this.state;
            if (isLoading) {
                return <Spinner/>;
            }

            if (isError) {
                return <ErrorIndicator/>
            }
            return <View {...this.props} data={data}/>;
        }
    };
};

export default withData;