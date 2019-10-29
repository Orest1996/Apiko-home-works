import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TvShows from "../Pages/TvShows/TvShows";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";

const App = () => {
    const [showsType, setShowsType] = useState('popular');
    const [tvShows, setTvShows] = useState({});
    const [details, setDetails] = useState({});
    const [page, setPage] = useState(1);
    const [tvId, setTvId] = useState(1412);
    const [season_number, setSeason_number] = useState(null);
    const [episode_number, setEpisode_number] = useState(null);
    const [isDetails, setIsDetails] = useState(false);
    const linkForShowDetailsFetch = `https://api.themoviedb.org/3/tv/${tvId}${season_number ? season_number : ''}${episode_number ? episode_number : ''}?api_key=5701452ce6549db75dc9491e8c2d4c21`;
    const linkForShowsFetch = `https://api.themoviedb.org/3/tv/${showsType}?api_key=5701452ce6549db75dc9491e8c2d4c21&page=${page}`;

    useEffect(() => {
        let fetchShows = async () => {
            await axios.get(linkForShowsFetch)
                .then(response => setTvShows(response.data));
        };
        fetchShows()

    }, [linkForShowsFetch, page]);

    useEffect(() => {
        let fetchDetails = () => {
            axios.get(linkForShowDetailsFetch)
                .then(response => setDetails(response.data));
        };
        fetchDetails()

    }, [linkForShowDetailsFetch, tvId]);

    return (
        <div className="wrapper">
            {
                isDetails
            ? <DetailsPage
                        details={details}
                        tvId={tvId}
                        setSeason_number={setSeason_number}
                        setEpisode_number={setEpisode_number}
                    />
            : <TvShows
                tvShows={tvShows}
                showsType={showsType}
                setShowsType={setShowsType}
                setPage={setPage}
                page={page}
                setIsDetails={setIsDetails}
                setTvId={setTvId}
                />
            }
        </div>
    );
};

export default App
