import produce from 'immer';
import createReducer from "./reducerUtil";
const initialState ={users:[]}


const usersReducer = {
    setUsers(state, action) {
        state.users=action.payload;
    }
    
}


export default produce((state, action) => createReducer(state, action, usersReducer), initialState);