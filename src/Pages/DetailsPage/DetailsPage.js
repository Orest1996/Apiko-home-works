import React from 'react';
import Title from "../../components/Title/Title";
import Poster from "../../components/Poster/Poster";
import Overview from "../../components/Overview/Overview";
import DetailsList from "../../components/DetailsList/DetailsList";
import EpisodesAndSeasonsCounter from "../../components/EpisodesAndSeasonsCounter/EpisodesAndSeasonsCounter";

const DetailsPage = ({details, tvId, setSeason_number, setEpisode_number}) => {
    return (
            <div className="containerElements">
                <Title name={details.name} />
                <div className="topContainer">
                    <Poster
                        details={details}
                        name={details.name}
                    />
                    <Overview overview={details.overview}/>
                </div>

                <EpisodesAndSeasonsCounter
                    details={details}
                />
                <DetailsList
                    data={details}
                    tvId={tvId}
                    setSeason_number={setSeason_number}
                    setEpisode_number={setEpisode_number}
                />
            </div>
        )
};

export default DetailsPage
