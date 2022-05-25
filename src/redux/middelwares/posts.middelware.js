import { act } from '@testing-library/react';
import {actions} from '../../redux/actions/actions'

export const getPostsByUser = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_POSTS_BY_USER') {

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${action.payload.id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                dispatch(actions.setPosts(data));
                action.payload.history.push("/userPosts")

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return next(action);
}
export const savePost = ({ dispatch, getState }) => next => action => {

    if (action.type === 'SAVE_POST') {
        const data = { userId: action.payload.userId,title: action.payload.title,body: action.payload.body};
                alert('save post success')

        // fetch('', {
        //     method: 'POST', 
        //     body: data,
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //         alert('save post success')
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }
    return next(action);
}
