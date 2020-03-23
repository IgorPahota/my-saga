import React from 'react';
import Post from "../Post/Post";

export default ({posts}) => {
    if (!posts.length) {
        return <button className="btn btn-primary">Загрузить посты</button>
    }
    return posts.map(post=>
        <Post post={post} key={post}/>
    )
}