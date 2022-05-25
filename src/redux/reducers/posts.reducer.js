import produce from 'immer';
import createReducer from "./reducerUtil";
const initialState ={posts:[]}


const postsReducer = {
    setPosts(state, action) {
        state.posts=action.payload;
    }
    
}


export default produce((state, action) => createReducer(state, action, postsReducer), initialState);