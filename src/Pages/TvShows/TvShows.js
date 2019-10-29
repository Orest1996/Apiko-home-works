import React, { Fragment } from 'react';
import Title from "../../components/Title/Title";
import ShowsList from "../../components/ShowsList/ShowsList";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import Paginator from "../../components/Paginator/Paginator";

const TvShows = ({tvShows, showsType, setShowsType, setPage, page, setIsDetails, setTvId }) => {

    return (
            <Fragment>
                <Title showsType={showsType}/>
                <ShowsList setIsDetails={setIsDetails} data={tvShows.results} setTvId={setTvId}/>
                <SwitchButton
                    showsType={showsType}
                    setShowsType={setShowsType}
                    setPage={setPage}
                />
                <Paginator
                    page={page}
                    tvShows={tvShows}
                    setPage={setPage}
                />
            </Fragment>
        )
};

export default TvShows
