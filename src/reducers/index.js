import { combineReducers } from 'redux';
import { reducerPosts } from './reducer-posts';
import { reducerActivePost } from './reducer-activePost';

const rootReducer = combineReducers({
  posts : reducerPosts,
  activePost : reducerActivePost
});

export default rootReducer;
