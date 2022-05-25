import {actions} from '../../redux/actions/actions'

export const getUsers = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_USERS') {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                dispatch(actions.setUsers(data));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return next(action);
   }
