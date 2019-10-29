import React from 'react';

const DetailsListItem = ({ children, season_number, episode_number, season_id, setSeason_number, setEpisode_number}) => {

    const clickHandler = () => {
        setSeason_number(`/season/${season_number}`);
        if (episode_number) {
            setEpisode_number(`/episode/${episode_number}`)
        }
    };
    return (
            <li className="list-detail-item" onClick={clickHandler}>
                {children}
            </li>
        )
};

export default DetailsListItem
