import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProfileData, patchProfileData } from 'actions/profile'

import Loader from 'components/common/Loader'

const Profile = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [birthday, setBirthday] = useState('')
    const [country, setCountry] = useState('')
    const [categories, setCategories] = useState(0)
    const [isAdult, setIsAdult] = useState(false)
    const [interests, setInterests] = useState(0)

    const { profile, isLoading } = useSelector(state => state.profile)
    const dsp = useDispatch()

    useEffect(() => dsp(getProfileData()), [])
    useEffect(() => {
        if (profile) {
            setFirstName(profile.first_name)
            setLastName(profile.last_name)
            setEmail(profile.email)
            
            if (profile.is_blogger) {
                setBirthday(profile.birthday)
                setCategories(profile.categories)
                setCountry(profile.country)
            }

            if (profile.is_reader) {
                setIsAdult(profile.is_adult)
                setInterests(profile.interests)
            }
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

    const bloggerProfile = (
        <>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Birthday:</label>
                <input type="date" className="form-control" id="date" name="date"
                    value={birthday} onChange={e => setBirthday(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="country" className="form-label">Country:</label>
                <input type="text" className="form-control" id="country" name="country"
                    value={country} onChange={e => setCountry(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="categories" className="form-label">Categories:</label>
                <input type="number" className="form-control" id="categories" name="categories"
                    value={categories} onChange={e => setCategories(e.target.value)}
                />
            </div>
        </>
    )

    const readerProfile = (
        <>
            <div className="mb-3 form-check">
                <label htmlFor="adult" className="form-check-label">18 years:</label>
                <input type="checkbox" className="form-check-input" id="adult" name="adult"
                    value={isAdult} onChange={e => setIsAdult(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="interests" className="form-label">Categories:</label>
                <input type="number" className="form-control" id="interests" name="interests"
                    value={interests} onChange={e => setInterests(e.target.value)}
                />
            </div>
        </>
    )

    return !isLoading ? (
        <div className="container">
            <ol className="breadcrumb my-4">
                <li className="breadcrumb-item active">My Account</li>
            </ol>

            <form onSubmit={e => patchData(e)}>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First name:</label>
                    <input type="text" className="form-control" id="firstname" name="firstname"
                        value={firstName} onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last name:</label>
                    <input type="text" className="form-control" id="lastname" name="lastname"
                        value={lastName} onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" name="email"
                        value={email} onChange={e => setEmail(e.target.value)}
                    />
                </div>
                { profile && profile.is_blogger ? bloggerProfile : profile && profile.is_reader ? readerProfile : null }
                <button className="btn btn-success">Save changes</button>
            </form>
        </div>
    ) : <Loader />
}

export default Profile
