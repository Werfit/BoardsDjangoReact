import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PublicBoardsRoute from './PublicBoardsRoute'
import Loader from '../common/Loader'

const PrivateBoardsRoute = ({ component: Component, ...rest }) => {
    const { user, isLoading } = useSelector(state => state.accounts)

    return user ? 
        <PublicBoardsRoute component={Component} {...rest} /> :
            isLoading || localStorage.getItem('usr_token') ? 
                <Loader /> : <Redirect to="/login/" />
}

export default PrivateBoardsRoute
