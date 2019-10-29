import React, { Fragment } from 'react';

const ShowsListItem = ({children, setIsDetails, id, setTvId}) => {
    const clickHandler = () => {
        setTvId(id);
        setIsDetails(true)
    };

    return (
            <Fragment>
                <li onClick={clickHandler}>{children}</li>
            </Fragment>
        )
};

export default ShowsListItem
