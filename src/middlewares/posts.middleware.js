import { REQUEST_DELETE_POST, REQUEST_CREATE_POST, REQUEST_READ_POST, REQUEST_READ_ALL_POST, POSTS } from "../actions/posts.actions";
import { apiRequest } from "../actions/api.actions";

const BASE_URL = "http://localhost:3000/";

export const postsMiddleware = ({dispatch}) => next => action => {
    console.log("inside postsMiddleware", action.type)
    next(action);

    switch (action.type) {
        case REQUEST_DELETE_POST:
            dispatch( apiRequest(action.payload, 'delete', `${BASE_URL}posts/${action.payload}`, POSTS, action.success))
            break;
        case REQUEST_CREATE_POST:
            dispatch( apiRequest(action.payload, 'post', `${BASE_URL}posts/`, POSTS, action.success))
            break;
        case REQUEST_READ_POST:
            dispatch( apiRequest(null, 'get', `${BASE_URL}posts/${action.payload}`, POSTS, action.success))
            break;
        case REQUEST_READ_ALL_POST:
            dispatch( apiRequest(null, 'get', `${BASE_URL}posts`, POSTS, action.success))
            break;
        default:
            break;
    }
}