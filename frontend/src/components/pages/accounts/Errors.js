import React from 'react'
import { useSelector } from 'react-redux'

const Errors = ({ checkPasswords=true, password1='', password2='' }) => {
    const { errors } = useSelector(state => state.accounts)
    const passwordsCheck = password1 !== password2 && checkPasswords

    const checkErrorsFields = (key, val) => {
        switch (key) {
            case 'non_field_errors':
                return val
            case 'username':
            case 'password':
            case 'email':
                return `${key}: ${val}`
            default:
                return `[server]: ${val}`
        }
    }

    return (errors.length !== 0 || passwordsCheck) && (
        <div className="alert alert-danger">
            {
                passwordsCheck && <div>Passwords don't match</div>
            }
            {
                Object.entries(errors).map(([key, error], index) => <div key={index}>{checkErrorsFields(key, error)}</div>)
            }
        </div>
    )
}

export default Errors
