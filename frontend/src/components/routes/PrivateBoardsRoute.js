import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PublicBoardsRoute from './PublicBoardsRoute'
import Loader from '../common/Loader'

const PrivateBoardsRoute = ({ component: Component, bloggerOnly=false, readerOnly=false, ...rest }) => {
    const { user, isLoading } = useSelector(state => state.accounts)

    const condition = bloggerOnly ?
        user && user.is_blogger : readerOnly ?
            user && user.is_reader : user


    if (!bloggerOnly && !readerOnly)
        return user ? 
            <PublicBoardsRoute component={Component} {...rest} /> :
                isLoading || localStorage.getItem('usr_token') ? 
                    <Loader /> : <Redirect to="/login/" />

    return condition ?
        <PublicBoardsRoute component={Component} {...rest} /> :
        isLoading || localStorage.getItem('usr_token') && !user ? 
            <Loader /> : <Redirect to="/login/" />
}

export default PrivateBoardsRoute
