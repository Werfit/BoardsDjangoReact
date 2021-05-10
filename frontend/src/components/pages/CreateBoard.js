import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { createBoard } from 'actions/boards'

const CreateBoard = () => {
    const dsp = useDispatch()
    const history = useHistory()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const newBoard = e => {
        e.preventDefault()

        dsp(createBoard({
            data: { name, description },
            pushHistory: history.push
        }))
    }

    return (
        <div className="container">
            <ol className="breadcrumb my-4">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">
                    <span>New board</span>
                </li>
            </ol>

            <form onSubmit={e => newBoard(e)}>
                <div className="mb-3">
                    <label htmlFor="board" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="board" required
                        value={name} onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Description:</label>
                    <input type="text" className="form-control" id="subject" required
                        value={description} onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default CreateBoard
