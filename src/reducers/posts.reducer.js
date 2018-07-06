import { DELETE_POST, CREATE_POST, READ_POST, READ_ALL_POST} from "../actions/posts.actions";

const postsInitialState = [];

export const reducerPosts = (state = postsInitialState, action) => {
    switch (action.type) {
        case READ_ALL_POST:
            return action.payload;
        case DELETE_POST:
            return state.filter( (elt) =>{ if(elt.id != action.payload) return elt } );
        case CREATE_POST:
            return [...state, action.payload];
        default:
            return state;
    }
}

export const reducerActivePost = (state = null, action) => {
    switch (action.type) {
        case READ_POST:
            return action.payload;
        default:
            return state;
    }
}