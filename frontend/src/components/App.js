import React, { Suspense, lazy, useEffect, useLayoutEffect  } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { loadUser } from 'actions/accounts'

import PublicBoardsRoute from './routes/PublicBoardsRoute'
import PrivateBoardsRoute from './routes/PrivateBoardsRoute'
import NotPrivateBoardsRoute from './routes/NotPrivateBoardsRoute'

import Loader from './common/Loader'

import styles from 'styles/index.sass'

const Boards = lazy(() => import('./pages/Boards'))
const Topics = lazy(() => import('./pages/Topics'))
const Posts = lazy(() => import('./pages/Posts'))
const CreateBoard = lazy(() => import('./pages/CreateBoard'))
const UpdateBoard = lazy(() => import('./pages/UpdateBoard'))
const CreateTopic = lazy(() => import('./pages/CreateTopic'))
const ReplyPost = lazy(() => import('./pages/ReplyPost'))
const Login = lazy(() => import('./pages/accounts/Login'))
const Signup = lazy(() => import('./pages/accounts/Register'))
const Profile = lazy(() => import('./pages/accounts/Profile'))
const ChangePassword = lazy(() => import('./pages/accounts/ChangePassword'))
const ResetPassword = lazy(() => import('./pages/accounts/ResetPassword'))
const ResetPasswordChange = lazy(() => import('./pages/accounts/ResetPasswordChange'))
const EditPost = lazy(() => import('./pages/EditPost.js'))

const Alerts = lazy(() => import('./common/Alerts'))

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
                    <PrivateBoardsRoute path='/boards/new/' bloggerOnly={true} component={ CreateBoard } />
                    <PrivateBoardsRoute exact path='/boards/:board_id/' bloggerOnly={true} component={ UpdateBoard } />
                    <PrivateBoardsRoute path='/boards/:board_id/topics/new/' component={ CreateTopic } />
                    <PrivateBoardsRoute path='/boards/:board_id/topics/:topic_id/posts/reply/' component={ ReplyPost }/>
                    <PrivateBoardsRoute path='/boards/:board_id/topics/:topic_id/posts/:post_id/edit/' component={ EditPost }/>
                    <PrivateBoardsRoute path='/settings/profile/' component={ Profile }/>
                    <PrivateBoardsRoute path='/settings/password/' component={ ChangePassword }/>
                    <NotPrivateBoardsRoute path='/login/' component={ Login } />
                    <NotPrivateBoardsRoute path='/register/' component={ Signup } />
                    <NotPrivateBoardsRoute exact path='/password-reset/' component={ ResetPassword } />
                    <NotPrivateBoardsRoute path='/password-reset/:uidb64/:token/' component={ ResetPasswordChange } />
                    <Route>
                        <div className="alert alert-danger">
                            <b>Error 404.</b> No page found
                        </div>
                    </Route>
                </Switch>
                <Alerts />
            </Router>
        </Suspense>
    )
}

export default App
