import React from 'react';
import {NavLink} from "react-router-dom";
import {routes} from "./routes";

const Navigation = () => {
    return (
        <nav>
            <NavLink exact activeClassName="active" to={routes.HOME}>Home</NavLink>
            <NavLink activeClassName="active" to={routes.SHOP}>Shop</NavLink>
            <NavLink activeClassName="active" to={routes.REVIEWS}>Reviews</NavLink>
        </nav>
    )
};

export default Navigation
