import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../common/Loader'

const NotPrivateBoardsRoute = ({ component: Component,  ...rest}) => {
    const { user, isLoading } = useSelector(state => state.accounts)

    // Allowed only for not authenticated users
    return !user ? (
        <Route component={Component} {...rest} />
    ) : isLoading ? <Loader /> || localStorage.getItem('usr_token') : <Redirect to="/" />
}

export default NotPrivateBoardsRoute
