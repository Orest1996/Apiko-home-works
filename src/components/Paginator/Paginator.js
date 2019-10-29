import React from 'react';
import PaginatorButton from "../UI/PaginatorButton/PaginatorButton";
import PageCounter from "../PageCounter/PageCounter";

const Paginator = ({tvShows, setPage, page}) => {
    return (
            <div className="paginator">
                <PaginatorButton
                    tvShows={tvShows}
                    setPage={setPage}
                    page={page}
                >
                    Prev
                </PaginatorButton>
                <PaginatorButton
                    tvShows={tvShows}
                    setPage={setPage}
                    page={page}
                >
                    Next
                </PaginatorButton>
                <PageCounter tvShows={tvShows}/>
            </div>
        )
};

export default Paginator
