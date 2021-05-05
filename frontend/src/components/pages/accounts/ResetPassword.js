import React, { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { sendEmail } from 'actions/password-reset'
import styles from 'styles/accounts.sass'

import Errors from './Errors'

const ResetPassword = () => {
    const [email, setEmail] = useState('')
    const [toShow, toggleVisibility] = useState(false)
    const dsp = useDispatch()

    useLayoutEffect(() => {
        // Lazy style import
        styles.use()
        return () => { styles.unuse() }
    }, [])

    const Notification = (
        <div className="alert alert-info mt-4">
            Check your email. We have sent you a link.
        </div>
    )

    const showNotification = () => {
        toggleVisibility(true)
        setTimeout(() => toggleVisibility(false), 3000)
    }

    const resetPassword = e => {
        e.preventDefault()

        dsp(sendEmail(email, showNotification))
    }

    return (
        <div className="container">
            <h1 className="text-center logo my-4">
                <Link to="/">Djagno Boards</Link>
            </h1>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="card">
                        <div className="card-body">
                            <Errors checkPasswords={false} />
                            <h3 className="card-title">Reset your password</h3>
                            <p>Enter your email address and we will send you a link to reset your password.</p>
                            <form onSubmit={e => resetPassword(e)}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" className="form-control"
                                        value={email} onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-block">Send password reset email</button>
                                </div>
                            </form>
                            { toShow && Notification }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
