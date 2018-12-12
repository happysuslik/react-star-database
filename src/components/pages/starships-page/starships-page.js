import React from "react";
import {StarshipList} from "../../sw-components";
import { withRouter } from 'react-router-dom';

import "./starships-page.css";

const StarshipsPage = ({ history }) => {
    return (
        <StarshipList onItemSelected={(itemId) => history.push(itemId)}/>
    );
};

export default withRouter(StarshipsPage);
