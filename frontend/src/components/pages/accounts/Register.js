import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { registerUser } from 'actions/accounts'

import styles from 'styles/accounts.sass'

import Errors from './Errors'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [isBlogger, setIsBlogger] = useState(false)
    const [isReader, setIsReader] = useState(false)

    const dsp = useDispatch()

    const signup = e => {
        e.preventDefault()

        if (password === password2) {
            dsp(registerUser({username, password, is_blogger: isBlogger, is_reader: isReader}))
        }
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
                            <Errors password1={password} password2={password2}/>

                            <h3 className="card-title">Sign up</h3>
                            <form method="post" onSubmit={e => signup(e)}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp"
                                        value={username} onChange={e => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password"
                                        value={password} onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password2" className="form-label">Confirm password</label>
                                    <input type="password" className='form-control' id="password2"
                                        value={password2} onChange={e => setPassword2(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="blogger"
                                            value={isBlogger} onChange={() => setIsBlogger(!isBlogger)}
                                        />
                                        <label className="form-check-label" for="blogger">
                                            Blogger
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="reader"
                                            value={isReader} onChange={() => setIsReader(!isReader)}
                                        />
                                        <label className="form-check-label" for="reader">
                                            Reader
                                        </label>
                                    </div>
                                </div>
                                
                                <button className="btn btn-primary btn-block">Sign up</button>
                            </form>
                        </div>
                        <div className="card-footer text-muted text-center">
                            Have an account already? <Link to="/login/">Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
