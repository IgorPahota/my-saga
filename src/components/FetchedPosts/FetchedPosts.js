import React from 'react';
import Post from "../Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../redux/actions";
import Spinner from "../Spinner/Spinner";

export default () => {

    const dispatch = useDispatch(); //Using dispatch from react-redux
    const posts = useSelector(state => state.posts.fetchedPosts); //Using selector form react-redux for getting data from the state
    const loading = useSelector(state => state.app.loading);

    if (loading) {
        return <Spinner/>
    }

    if (!posts.length) {
        return <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchPosts())}
        >Загрузить посты</button>
    }
    return posts.map(post=>
        <Post post={post} key={post.id}/>
    )
}