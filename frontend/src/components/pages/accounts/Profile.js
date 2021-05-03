import React from 'react'

const Profile = () => {
    return (
        <div className="container">
            <ol className="breadcrumb my-4">
                <li className="breadcrumb-item active">My Account</li>
            </ol>

            <form>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First name</label>
                    <input type="text" className="form-control" id="firstname" name="firstname" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="lastname" name="lastname"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email"/>
                </div>
                <button className="btn btn-success">Save changes</button>
            </form>
        </div>
    )
}

export default Profile
