import {getUsers} from './users.middelware'
import {getPostsByUser} from './posts.middelware'
import {savePost} from './posts.middelware'

const appMiddleware = [getUsers,getPostsByUser,savePost]

export default appMiddleware;
