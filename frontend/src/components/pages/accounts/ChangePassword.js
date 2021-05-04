import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changePasswords } from 'actions/profile'

import Errors from './Errors'

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dsp = useDispatch()

    const _changePasswords = e => {
        e.preventDefault()

        if (newPassword === confirmPassword)
        {
            dsp(changePasswords({ oldPassword, newPassword }))
            setOldPassword('')
            setNewPassword('')
            setConfirmPassword('')
        }
    }

    return (
        <div className="container">
            <ol className="breadcrumb my-4">
                <li className="breadcrumb-item active">Change Password</li>
            </ol>

            <Errors password1={newPassword} password2={confirmPassword} />
            <form onSubmit={e => _changePasswords(e)}>
                <div className="mb-3">
                    <label htmlFor="oldpassword" className="form-label">Old password</label>
                    <input type="password" className="form-control" id="oldpassword"
                        value={oldPassword} onChange={e => setOldPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="newpassword" className="form-label">New password</label>
                    <input type="password" className="form-control" id="newpassword"
                        value={newPassword} onChange={e => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmpassword" className="form-label">Confirm password</label>
                    <input type="password" className="form-control" id="confirmpassword"
                        value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button className="btn btn-success">Save password</button>
            </form>
        </div>
    )
}

export default ChangePassword
