import React from 'react'
import { Route } from 'react-router-dom'
import Navigation from '../common/Navigation'

const PublicBoardsRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} children={({match}) => (
            <>
                <Navigation />
                <Component match={match} />
            </>
        )}/>
    )
}

export default PublicBoardsRoute
