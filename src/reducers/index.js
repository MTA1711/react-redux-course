import { combineReducers } from 'redux';
import { reducerPosts, reducerActivePost } from './posts.reducer';

import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts : reducerPosts,
  activePost : reducerActivePost,
  form : formReducer
});

export default rootReducer;
