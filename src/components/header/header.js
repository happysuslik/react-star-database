import React from "react";
import "./header.css";

const AppHeader = ({onServiceChange}) => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="/" className="logo">
                    Star Database
                </a>
            </h3>

            <ul className="d-flex">
                <li>
                    <a href="/">People</a>
                </li>
                <li>
                    <a href="/">Planets</a>
                </li>
                <li>
                    <a href="/">Starships</a>
                </li>
            </ul>

            <button
                className={"btn btn-primary btn-sm"}
                onClick={onServiceChange}>Change Service
            </button>
        </div>
    );
};

export default AppHeader;
