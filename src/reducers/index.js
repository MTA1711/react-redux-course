import { combineReducers } from 'redux';
import UsersReducer from './reducer_user';
import { ActiveUserReducer } from './reducer_activeUser';

const rootReducer = combineReducers({
  users : UsersReducer,
  activeUser : ActiveUserReducer
});

export default rootReducer;
