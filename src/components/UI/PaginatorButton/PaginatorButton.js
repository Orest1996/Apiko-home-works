import React, { Fragment } from 'react';

const PaginatorButton = ({tvShows, children, setPage, page}) => {
    const clickHandler = () => {
        if (children === 'Prev') {
            if (tvShows.page > 1) setPage(page - 1);
        } else {
            if (tvShows.page < tvShows.total_pages) setPage(page + 1);
        }
    };

    return (
            <Fragment>
                <button
                    onClick={clickHandler}
                >
                    {children}
                </button>
            </Fragment>
        )
};

export default PaginatorButton
