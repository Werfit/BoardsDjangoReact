import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { checkToken, resetPassword } from 'actions/password-reset'

import styles from 'styles/accounts.sass'
import Loader from '../../common/Loader'
import Errors from './Errors'

const ResetPasswordChange = ({ match }) => {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { user, isLoading, status } = useSelector(state => state.passwordReset)
    const dsp = useDispatch()
    
    useEffect(() => dsp(checkToken(match.params.uidb64, match.params.token)), [])

    useLayoutEffect(() => {
        styles.use()
        return () => styles.unuse()
    }, [])

    const _resetPassword = e => {
        e.preventDefault()

        dsp(resetPassword(newPassword))
    }

    const validToken = (
        <>
            <h3 className="card-title">Change password for <b>{ user && user.username }</b></h3>
            <Errors password1={newPassword} password2={confirmPassword} />

            <form onSubmit={e => _resetPassword(e)}>
                <div className="mb-3">
                    <label htmlFor="newpassword" className="form-label">New password</label>
                    <input type="password" id="newpassword" className="form-control"
                        value={newPassword} onChange={e => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmpassword" className="form-label">Confirm password</label>
                    <input type="password" id="confirmpassword" className="form-control"
                        value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary">Change password</button>
                </div>
            </form>
        </>
    )

    const invalidToken = (
        <>
            <h3 className="card-title">Reset your password</h3>
            <div className="alert alert-danger" role="alert">
                It looks like you clicked on an invalid password reset link. Please try again.
            </div>
            <div className="d-grid">
                <Link className="btn btn-secondary" to="/password-reset/">Request a new password reset</Link>
            </div>
        </>
    )

    return !isLoading ? (
        <div className="container">
            <h1 className="text-center logo my-4">
                <Link to='/'>Django Boards</Link>
            </h1>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="card">
                        <div className="card-body">
                            { status === 'SUCCESS' ? validToken : status === 'ERROR' ? invalidToken : '' }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : <Loader />
}

export default ResetPasswordChange
