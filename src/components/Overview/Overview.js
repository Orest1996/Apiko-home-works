import React from 'react';

const Overview = ({overview}) => {
    return (
        <div className="description">
            {
                overview
                ? overview
                : 'There is no description'
            }
        </div>
    )
};

export default Overview
