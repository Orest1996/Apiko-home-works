import React, {Fragment, useState, useEffect} from 'react';
import PostList from "./components/PostList";
import axios from "axios";
import MoreButton from "./components/MoreButton";

const App = () => {
    const [posts, setPosts] = useState(null);
    const [amountToDraw, setAmountToDraw] = useState(10);

    useEffect(() => {
        async function fetchData() {
            const result = await axios('https://jsonplaceholder.typicode.com/posts');

            setPosts(result.data)
        }

        fetchData();
    }, []);

    return (
        <Fragment>
            <PostList
                posts={posts}
                amountToDrow={amountToDraw}
            />
            {posts
                ? <MoreButton
                    currentLength={amountToDraw}
                    setAmount={setAmountToDraw}
                    postsLength={posts.length}/>
                : null}
        </Fragment>
    )
};

export default App

