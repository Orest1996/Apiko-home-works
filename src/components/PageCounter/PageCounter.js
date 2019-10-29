import React, { Fragment } from 'react';

const PageCounter = ({tvShows}) => {
    return (
            <Fragment>
                <span>{tvShows.page} / {tvShows.total_pages}</span>
            </Fragment>
        )
};

export default PageCounter;
