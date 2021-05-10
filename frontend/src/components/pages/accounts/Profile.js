import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'

import { convertToSelect, convertFromSelect, OPTIONS } from 'utils/multiselect'

import { getProfileData, patchProfileData } from 'actions/profile'

import Loader from 'components/common/Loader'

const Profile = () => {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [birthday, setBirthday] = useState('')
    const [country, setCountry] = useState('')
    const [categories, setCategories] = useState([])
    const [isAdult, setIsAdult] = useState(false)
    const [interests, setInterests] = useState([])

    const { profile, isLoading } = useSelector(state => state.profile)
    const dsp = useDispatch()

    useEffect(() => dsp(getProfileData()), [])
    useEffect(() => {
        if (profile) {
            setUsername(profile.username || '')
            setFirstName(profile.first_name || '')
            setLastName(profile.last_name || '')
            setEmail(profile.email || '')
            
            if (profile.is_blogger) {
                setBirthday(profile.birthday || '')
                setCategories(
                    convertToSelect(profile.categories) || ''
                )
                setCountry(profile.country || '')
            }

            if (profile.is_reader) {
                setIsAdult(profile.is_adult || '')
                setInterests(
                    convertToSelect(profile.interests) || ''
                )
            }
        }
    }, [profile])

    const patchData = e => {
        e.preventDefault()
        
        dsp(patchProfileData({
            first_name: firstName,
            last_name: lastName,
            is_adult: isAdult,
            interests: convertFromSelect(interests),
            categories: convertFromSelect(categories),
            email, country, birthday, username
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
            <div className="mb-4">
                <label htmlFor="categories" className="form-label">Categories:</label>
                <Select className="mb-4"
                    options={OPTIONS} isMulti={true} inputId="categories" name="categories"
                    value={categories} onChange={option => setCategories(option)}
                ></Select>
            </div>
        </>
    )

    const readerProfile = (
        <>
            <div className="mb-3 form-check">
                <label htmlFor="adult" className="form-check-label">18 years:</label>
                <input type="checkbox" className="form-check-input" id="adult" name="adult"
                    checked={isAdult} onChange={e => setIsAdult(!isAdult)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="interests" className="form-label">Interests:</label>
                <Select className="mb-4"
                    options={OPTIONS} isMulti={true} inputId="interests" name="interests"
                    value={interests} onChange={option => setInterests(option)}
                ></Select>
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
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" className="form-control" id="username" name="username"
                        value={username} onChange={e => setUsername(e.target.value)}
                    />
                </div>
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
                { profile && profile.is_blogger && bloggerProfile }
                { profile && profile.is_reader && readerProfile }
                <button className="btn btn-success">Save changes</button>
            </form>
        </div>
    ) : <Loader />
}

export default Profile
