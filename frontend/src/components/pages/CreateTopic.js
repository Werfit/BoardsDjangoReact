import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { loadBoardName, createTopic } from 'actions/topics'

const CreateTopic = ({ match }) => {
    const { isLoading, board } = useSelector(state => state.topics)
    const dsp = useDispatch()
    const history = useHistory()

    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => dsp(loadBoardName(match.params.board_id)), [])

    const newTopic = e => {
        e.preventDefault()

        dsp(createTopic({
            board_id: match.params.board_id,
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
                <li className="breadcrumb-item">
                    <Link to={ `/boards/${match.params.board_id}/topics/` }>{ isLoading || !board ? '' : board }</Link>
                </li>
                <li className="breadcrumb-item active">
                    <span>New topic</span>
                </li>
            </ol>

            <form onSubmit={e => newTopic(e)}>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject:</label>
                    <input type="text" className="form-control" id="subject" required
                        value={subject} onChange={e => setSubject(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea name="message" className="form-control" id="message" rows="5" placeholder="What is on your mind?" maxLength="4000"
                        value={message} onChange={e => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <div id="messageHelp" className="form-text">The max length of the text 4000</div>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default CreateTopic
