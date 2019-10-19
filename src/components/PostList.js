import React, { useState } from 'react';
import Loader from "./Loader";
import PostListItem from "./PostListItem";
import {SearchInput} from "./SearchInput";
import '../main.css';

const PostList = ({posts, amountToDrow}) => {
    const [, setSearchInputValue] = useState('');
    const [filteredArray, setFilteredArray] = useState(null);

    const changeHandler = (event) => {
        setSearchInputValue(event.target.value);
        setFilteredArray(verifyTitle(event.target.value));
    };

    const verifyTitle = (searchValue, post = posts) => {
        let filteredArray = [];
        let regExp = new RegExp(`${searchValue}`);
        post.forEach(element => {
            if (element.title.match(regExp)) {
                filteredArray.push(element);
            }
        });
        return filteredArray
    };

    const renderPosts = (post, amountToDrow) => {
        if (post === null) {
            post = posts;
        } else if ((Array.isArray(post)) && (!post[0])) {
            post = filteredArray;
            post[0] = {id: '0', title: 'совпадений не найдено'};
        }

        return (
            <ul>
                {post ?
                    post.map((element, index) => {
                        if (amountToDrow >= index + 1) {
                            return <PostListItem
                                title={element.title}
                                id={element.id} body={element.body}
                                key={index}
                            />
                        }
                    }) :
                    <Loader/>}
            </ul>
        )
    };

    return (
        <div className="PostList">
            <SearchInput changeHandler={changeHandler}/>
            {renderPosts(filteredArray, amountToDrow)}
        </div>
    );
};


export default PostList

