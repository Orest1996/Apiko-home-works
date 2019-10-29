import React from 'react';

const EpisodesAndSeasonsCounter = ({details}) => {
    return (
        <div className="counters">
            <span>
               {details.number_of_episodes
                   ? 'Episodes : ' + details.number_of_episodes
                   : null}
                {details.episodes
                    ? 'Episodes : ' + details.episodes.length
                    : null}
                {details.episode_number
                    ? 'Episode : ' + details.episode_number
                    : null}
            </span>
           <span>
               {details.number_of_seasons
                   ? 'Seasons : ' + details.number_of_seasons
                   : null}
               {details.season_number
                   ? 'Season : ' + details.season_number
                   : null}
           </span>
            </div>
    )
};

export default EpisodesAndSeasonsCounter
