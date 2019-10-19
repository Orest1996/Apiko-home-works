import React from 'react';
import '../main.css';

const PostListItem = ({id, title, body}) => {
    return (
        <li className="PostListItem">

            <span><strong>ID: {id}</strong> {title}</span>
            <p>{body}</p>
        </li>
    )
};


export default PostListItem
