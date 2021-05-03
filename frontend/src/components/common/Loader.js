import React from 'react'

const Loader = ({ isTable=false }) => {
    return isTable ? (
        <tr>
            <td colSpan="4">
                Loading...
            </td>
        </tr>
    ) : <div>Loading...</div>
}

export default Loader
