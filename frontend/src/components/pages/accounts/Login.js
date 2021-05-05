import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { loginUser } from 'actions/accounts'

import styles from 'styles/accounts.sass'

import Errors from './Errors'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dsp = useDispatch()

    const login = e => {
        e.preventDefault()

        dsp(loginUser({ username, password }))
    }

    useLayoutEffect(() => {
        // Lazy style import
        styles.use()
        return () => { styles.unuse() }
    }, [])

    return (
        <div className="container">
            <h1 className="text-center logo my-4">
                <Link to="/">Django Boards</Link>
            </h1>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-4 col-sm-8">
                    <div className="card">
                        <div className="card-body">
                            <Errors checkPasswords={false} />

                            <h3 className="card-title">Log in</h3>
                            <form method="post" onSubmit={e => login(e)}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp"
                                        value={username} onChange={e => setUsername(e.target.value)} required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password"
                                        value={password} onChange={e => setPassword(e.target.value)} required
                                    />
                                </div>
                                
                                <button className="btn btn-primary btn-block">Log in</button>
                            </form>
                        </div>
                        <div className="card-footer text-muted text-center">
                            New to Django Boards? <Link to="/register/">Sign up</Link>
                        </div>
                    </div>
                    <div className="text-center py-2">
                        <small><Link className="text-muted" to="/password-reset/">Forgot your password?</Link></small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
