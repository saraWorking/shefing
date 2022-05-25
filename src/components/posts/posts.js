import React, { useEffect } from 'react'
import { actions } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from "react-router-dom";
import CreatePost from '../createPost/createPost';
import './posts.css'

const Posts = (props) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const postsList = useSelector((state) => state.posts.posts)
  const [userId] = useState(parseInt(useLocation()?.state?.userId));


  const createPost = () => {
//לא הספקתי להכניס לפופ אפ
    
  }


  return (<>
    {!postsList[0] ? <div>sory, but we can't find posts</div> :
      postsList.map((post, index) => (
        <div className="jumbotron">
          <p className="lead">{post.title}</p>
          <hr className="my-4"/>
            <p>{post.body}</p>
            <p className="lead">
            </p>
        </div>

      ))
    }
    <button className="btn" onClick={() => createPost()}>create new post</button>
    <CreatePost userId={userId}></CreatePost>
  </>)
}
export default Posts;
