import {ACTION_TYPE_POSTS} from '../actions/action-type'; 
const initialState = null;

export const reducerActivePost = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_POSTS.READ:
            return action.payload;
        default:
            return state;
    }
}