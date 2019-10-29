import React, {Fragment} from 'react';

const Title = ({showsType, name}) => {
    return (
        <Fragment>
            <h2>
                {showsType
                    ? showsType === 'popular'
                        ? 'Popular TV Shows'
                        : 'Rated TV Shows'
                    : name
                }
            </h2>
        </Fragment>
    )
};

export default Title
