
import { combineReducers } from 'redux';
import usersReducer from './users.reducer'
import postsReducer from './posts.reducer'

// Combine with other reducers we may add in the future
const appReducers = combineReducers({
  users: usersReducer,
  posts: postsReducer
});

export default appReducers