import React, { Fragment} from 'react';
import Loader from 'react-loader-spinner';
import ShowsListItem from "../ShowsListItem/ShowsListItem";

const ShowsList = ({data, setIsDetails, setTvId}) => {
    return (
        <Fragment>
            {
                data
                    ? <ul>
                        {data.map((item) => {
                            return <ShowsListItem
                                setTvId={setTvId} id={item.id} setIsDetails={setIsDetails} key={item.id}>{item.name}</ShowsListItem>
                        })}
                    </ul>
                    : <Loader type="TailSpin" color="black" height={80} width={80}/>
            }
        </Fragment>
    )
};

export default ShowsList
