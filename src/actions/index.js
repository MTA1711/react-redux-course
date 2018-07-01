import axios from 'axios';
import {ACTION_TYPE_POSTS} from './action-type';

const BASE_URL = "http://localhost:3000/";

export const readAllPost = () => {
    const fetchData = (dispatch) => {
        axios.get(`${BASE_URL}posts`)
        .then( response => {
            dispatch({type: ACTION_TYPE_POSTS.READ_ALL, payload : response.data});
        })
        .catch( error => {
            dispatch({type: ACTION_TYPE_POSTS.ERROR, payload : error});
        })
    }

    return fetchData;
}

export const readPost = (postId) => {
    const fetchData = (dispatch) => {
        axios.get(`${BASE_URL}posts/${postId}`)
        .then( response => {
            dispatch({type: ACTION_TYPE_POSTS.READ, payload : response.data});
        })
        .catch( error => {
            dispatch({type: ACTION_TYPE_POSTS.ERROR, payload : error});
        })
    }

    return fetchData;
}

export const deletePost = (postId) => {
    const fetchData = (dispatch) => {
        axios.delete(`${BASE_URL}posts/${postId}`)
        .then( response => {
            dispatch({type: ACTION_TYPE_POSTS.DELETE, payload : postId});
        })
        .catch( error => {
            dispatch({type: ACTION_TYPE_POSTS.ERROR, payload : error});
        })
    }

    return fetchData;
}

export const createPost = (post) => {
    const fetchData = (dispatch) => {
        axios.post(`${BASE_URL}posts/`, {
            title : post.title,
            content : post.content,
            author: post.author
        })
        .then( response => {
            dispatch({type: ACTION_TYPE_POSTS.CREATE, payload : response.data});
        })
        .catch( error => {
            dispatch({type: ACTION_TYPE_POSTS.ERROR, payload : error});
        })
    }

    return fetchData;
}