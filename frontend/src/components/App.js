import React, { Suspense, lazy, useEffect, useLayoutEffect  } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { loadUser } from 'actions/accounts'

import PublicBoardsRoute from './routes/PublicBoardsRoute'
import PrivateBoardsRoute from './routes/PrivateBoardsRoute'
import Loader from './common/Loader'

import styles from 'styles/index.sass'

const Boards = lazy(() => import('./pages/Boards'))
const Topics = lazy(() => import('./pages/Topics'))
const Posts = lazy(() => import('./pages/Posts'))
const CreateTopic = lazy(() => import('./pages/CreateTopic'))
const ReplyPost = lazy(() => import('./pages/ReplyPost'))
const Login = lazy(() => import('./pages/accounts/Login'))
const Signup = lazy(() => import('./pages/accounts/Register'))
const Profile = lazy(() => import('./pages/accounts/Profile'))

const App = () => {
    const dsp = useDispatch()
    useEffect(() => {
        dsp(loadUser())
    }, [])
    useLayoutEffect(() => {
        styles.use()
        return () => styles.unuse()
    }, [])

    return (
        <Suspense fallback={ <Loader /> }>
            <Router>
                <Switch>
                    <PublicBoardsRoute exact path='/' component={ Boards } />
                    <PublicBoardsRoute exact path='/boards/:board_id/topics/' component={ Topics } />
                    <PublicBoardsRoute exact path='/boards/:board_id/topics/:topic_id/posts/' component={ Posts } />
                    <PrivateBoardsRoute path='/boards/:board_id/topics/new/' component={ CreateTopic } />
                    <PrivateBoardsRoute path='/boards/:board_id/topics/:topic_id/posts/reply/' component={ ReplyPost }/>
                    <PrivateBoardsRoute path='/settings/profile/' component={ Profile }/>
                    <Route path='/login/' component={ Login } />
                    <Route path='/register/' component={ Signup } />
                    <Route>
                        <div className="alert alert-danger">
                            <b>Error 404.</b> No page found
                        </div>
                    </Route>
                </Switch>
            </Router>
        </Suspense>
    )
}

export default App
