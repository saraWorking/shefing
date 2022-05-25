import React, { useEffect } from 'react'
import { actions } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from "react-router-dom";

import './userCard.css'

const UserCard = (props) => {
  const history = useHistory();
  const dispatch = useDispatch()


  const { user, key } = props;

  const goToPosts = (id) => {

    dispatch(actions.getPostsByUser({ id: id, history: history }))
  }

  return (
    <div className="myCard card" key={key} >
      <div className="card m-3" >
        <div className="card-body ">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
          <p className="card-title">{user.company?.name}</p>
          <button className="btn btn-primary" onClick={()=>goToPosts(user.id)}>go to the posts</button>
        </div>
      </div>
    </div>
  )
}
export default UserCard;
