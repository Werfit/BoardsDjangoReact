import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Loader from './Loader'

import { logoutUser } from 'actions/accounts'

const Navigation = () => {
    const dsp = useDispatch()
    const { user, isLoading } = useSelector(state => state.accounts)

    // TODO: Add links
    const authenticatedNav = (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="userMenu" aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false" data-toggle="dropdown" role="button" href="#">{ (user && !isLoading) && user.username }</a>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                    <a className="dropdown-item" href="#">My account</a>
                    <a className="dropdown-item" href="#">Change password</a>
                    <div className="dropdown-divider"></div>
                    <span className="dropdown-item" onClick={() => dsp(logoutUser())}>Log out</span>
                </div>
            </li>
        </ul>
    )

    const notAuthenticatedNav = (
        <div className="row me-auto align-items-center" style={{ minWidth: "200px" }}>
            <Link className="btn btn-outline-secondary col" to="/login/">Log in</Link>
            <Link className="btn ms-2 btn-primary col" to="/register/">Sign up</Link>
        </div>
    )

    return (
        <nav className="navbar px-4 navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">Django Boards</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>
			<div className="collapse navbar-collapse" id="mainMenu">
				{
                    user ? authenticatedNav : isLoading ? <Loader /> : notAuthenticatedNav
                }
			</div>
		</nav>
    )
}

export default Navigation
