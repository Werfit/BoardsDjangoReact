import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProfileData, patchProfileData } from 'actions/profile'

import Loader from 'components/common/Loader'

const Profile = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const { profile, isLoading } = useSelector(state => state.profile)
    const dsp = useDispatch()

    useEffect(() => dsp(getProfileData()), [])
    useEffect(() => {
        if (profile) {
            setFirstName(profile.first_name)
            setLastName(profile.last_name)
            setEmail(profile.email)
        }
    }, [profile])

    const patchData = e => {
        e.preventDefault()
        
        dsp(patchProfileData({
            first_name: firstName,
            last_name: lastName,
            email
        }))
    }

    return !isLoading ? (
        <div className="container">
            <ol className="breadcrumb my-4">
                <li className="breadcrumb-item active">My Account</li>
            </ol>

            <form onSubmit={e => patchData(e)}>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First name</label>
                    <input type="text" className="form-control" id="firstname" name="firstname"
                        value={firstName} onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="lastname" name="lastname"
                        value={lastName} onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email"
                        value={email} onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <button className="btn btn-success">Save changes</button>
            </form>
        </div>
    ) : <Loader />
}

export default Profile
