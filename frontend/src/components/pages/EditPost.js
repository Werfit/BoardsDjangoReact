import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { loadPost, updatePost } from 'actions/posts'
import Loader from '../common/Loader'

const EditPost = ({ match }) => {
    const {board_id, topic_id, post_id} = match.params
    const {isLoading, post, board, topic} = useSelector(state => state.posts)

    const dsp = useDispatch()
    const history = useHistory()

    const [message, setMessage] = useState(post||'')

    useEffect(() => dsp(loadPost(match.params)), [])
    useEffect(() => setMessage(post||''), [post])

    const editPost = e => {
        e.preventDefault()

        dsp(updatePost({
            board_id, topic_id, post_id, message,
            pushHistory: history.push
        }))
    }

    return isLoading ? <Loader /> : (
        <div className="container">
            <ol className="breadcrumb my-4">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`/boards/${board_id}/topics/`}>{board ? board : ''}</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`/boards/${board_id}/topics/${topic_id}/posts/`}>{topic ? topic : ''}</Link>
                </li>
                <li className="breadcrumb-item active">
                    Edit Post
                </li>
            </ol>

            <form onSubmit={editPost}>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea id="message" className="form-control" value={message} onChange={e => setMessage(e.target.value)}>
                    </textarea>
                </div>
                <button className="btn btn-success">Save changes</button>
            </form>
        </div>
    )
}

export default EditPost
