import React from 'react';
import {useLocation, Link} from "react-router-dom"

const ReviewLink = ({children, setIsNav}) => {
    const {pathname} = useLocation();
    return (
        <Link onClick={() => setIsNav(false)} to={`${pathname}:${children}`}>
            {children}
        </Link>
    )
};

export default ReviewLink
