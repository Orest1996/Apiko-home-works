import React, { Fragment } from 'react';

const SwitchButton = ({showsType, setShowsType, setPage}) => {

    const clickHandler = () => {
        if (showsType === 'popular') {
            setShowsType('top_rated');
        } else {
            setShowsType('popular')
        }
        setPage(1);
    };

    return (
            <Fragment>
                <button onClick={clickHandler}>{
                    (showsType === 'popular')
                        ? 'Show Rated'
                        : 'Show Popular'
                }</button>
            </Fragment>
        )
};

export default SwitchButton
