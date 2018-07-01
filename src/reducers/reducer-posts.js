import {ACTION_TYPE_POSTS} from '../actions/action-type'; 

const postsInitialState = [];

export const reducerPosts = (state = postsInitialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_POSTS.READ_ALL:
            return action.payload;
        case ACTION_TYPE_POSTS.DELETE:
            return state.filter( (elt) =>{ if(elt.id != action.payload) return elt } );
        default:
            return state;
    }
}