import React, {Fragment} from 'react';
import {useParams, useHistory} from 'react-router-dom'
import {routes} from "./routes";

const ReviewPage = ({setIsNav}) => {
    const history = useHistory();
    const params = useParams();

    const clickHandler = () => {
        setIsNav(true);
        history.push(routes.REVIEWS);
    };

    return (
        <Fragment>
            {params.id.substr(1)}
            <button onClick={clickHandler}>Back</button>
        </Fragment>
    )
};

export default ReviewPage
