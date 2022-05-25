import React, { lazy, Suspense } from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
const Users = lazy(() => import('../components/users/users'))
const Posts = lazy(() => import('../components/posts/posts'))
export default function Routes() {
    return (
        <Switch>
            {/* <Redirect exact from="/" to={login} /> */}
            <Suspense fallback={<h1>Still Loading…</h1>}>

            <Route exact path={`/`} >
            <Users/>
            </Route>
            <Route path={`/userPosts`} >
                <Posts></Posts>
            </Route >
            </Suspense> 
            {/* <Route path="/drinks" render={(props) => (true ? <Suspense fallback={<h1>Still Loading…</h1>}>
                <Users {...props} />
            </Suspense> : <Redirect to="/home-page" />)} /> */}
        </Switch>
    )
}
