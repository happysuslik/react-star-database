import React from "react";
import { Link } from 'react-router-dom';
import "./header.css";

const AppHeader = ({isLoggedIn}) => {
    const login = <Link to="/login">Login</Link>;
    const logout = <Link to="/logout">Logout</Link>;
    const displayAuthLink = isLoggedIn ? logout : login;

    return (
        <div className="header d-flex">
            <h3>
                <Link to="/" className="logo">
                    Star Database
                </Link>
            </h3>

            <ul className="d-flex">
                <li>
                    <Link to="/people/">People</Link>
                </li>
                <li>
                    <Link to="/planets/">Planets</Link>
                </li>
                <li>
                    <Link to="/starships/">Starships</Link>
                </li>
                <li>
                    <Link to="/secret">Secret</Link>
                </li>
                <li>
                    {displayAuthLink}
                </li>
            </ul>
        </div>
    );
};

export default AppHeader;
