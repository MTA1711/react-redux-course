import { combineReducers } from 'redux';
import { reducerPosts } from './reducer-posts';
import { reducerActivePost } from './reducer-activePost';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts : reducerPosts,
  activePost : reducerActivePost,
  form : formReducer
});

export default rootReducer;
