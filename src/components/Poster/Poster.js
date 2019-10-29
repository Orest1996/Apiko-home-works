import React  from 'react';

const Poster = ({details, name}) => {
    let url;
    details.poster_path
        ? url = `https://image.tmdb.org/t/p/w154/${details.poster_path}`
        : url = `https://image.tmdb.org/t/p/w154/${details.still_path}`;

    return (
        <span className="imgContainer">
            <img src={url} alt={name}/>
        </span>
        )
};

export default Poster
