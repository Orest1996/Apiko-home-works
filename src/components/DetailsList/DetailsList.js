import React, {Fragment} from 'react';
import DetailsListItem from "../DetailsListItem/DetailsListItem";

const DetailsList = ({data, tvId, setSeason_number, setEpisode_number}) => {
    return (
        <Fragment>
            {
                data.seasons
                    ? <ul>
                        {data.seasons.map((item) => {
                            return <DetailsListItem
                                tvId={tvId}
                                season_id={item.id}
                                season_number={item.season_number}
                                key={item.id}
                                setSeason_number={setSeason_number}
                                setEpisode_number={setEpisode_number}
                            >
                                {item.name}
                            </DetailsListItem>
                        })}

                    </ul>
                    : null
            }
            {
                data.episodes
                    ? <ul>
                        {data.episodes.map((item) => {
                            return <DetailsListItem
                                season_number={item.season_number}
                                setSeason_number={setSeason_number}
                                setEpisode_number={setEpisode_number}
                                key={item.id}
                                episode_number={
                                    item.episode_number
                                        ? item.episode_number
                                        : null
                                }
                            >
                                {item.name}
                            </DetailsListItem>
                        })}
                    </ul>
                    : null
            }
        </Fragment>
    )
};

export default DetailsList
