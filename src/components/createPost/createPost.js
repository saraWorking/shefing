import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../redux/actions/actions'

export default function CreatePost(props) {
    const dispatch = useDispatch()

    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const save = () => {
        dispatch(actions.savePost({ userId: props.userId, title: title, body: body }));
    }
    const setProperty = (value, func) => {
        func(value)
    }
    return (
        <>
            <div>new post</div>
            <input className="form-control" placeholder="Enter title" aria-label="Search" onChange={(e) => setProperty(e.target.value, setTitle)} />
            <textarea className="form-control" placeholder="Enter body of post" aria-label="Search" onChange={(e) => setProperty(e.target.value, setBody)} />
            {title&&<button className='btn btn-primary' onClick={save}>Save</button>}
        
        </>
    )
}
