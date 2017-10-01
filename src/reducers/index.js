import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import tweet from './tweet';

export default combineReducers({
  user,
  runtime,
  tweet,
});
