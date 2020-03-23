import React from 'react';
import Post from "../Post/Post";

export default ({posts}) => {
    if (!posts.length) {
        return <p className="text-center">Постов нет</p>
    }
    return posts.map(post=>
        <Post post={post} key={post}/>
    )
}