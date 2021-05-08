import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

const CreateBoard = () => {
    const dsp = useDispatch()
    const history = useHistory()

    const [board, setBoard] = useState('')
    const [subject, setSubject] = useState('')

    const newBoard = e => {
        e.preventDefault()

        dsp(createBoard({
            data: { subject, message },
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
                    <label htmlFor="board" className="form-label">Board:</label>
                    <input type="text" className="form-control" id="board" required
                        value={board} onChange={e => setBoard(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject:</label>
                    <input type="text" className="form-control" id="subject" required
                        value={subject} onChange={e => setSubject(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default CreateBoard
