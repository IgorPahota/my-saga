import {CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function fetchPosts() {
    return async dispatch => {
        dispatch(showLoader()); //Starting to downloading posts, showing spinner
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const json = await response.json();
        setTimeout(() => {  //Timeout for spinner delay
                dispatch({type: FETCH_POSTS, payload: json});
                dispatch(hideLoader()) //Ending of post downloading, hiding spinner
            }, 500)

    }
}

