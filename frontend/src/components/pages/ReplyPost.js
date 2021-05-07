import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { loadPosts } from 'actions/posts'
import { replyTopic } from 'actions/topics'

import Post from '../boards/PostItem'
import Pagination from '../common/Pagination'

const ReplyPost = ({ match }) => {
    const { isLoading, board, topic, pages, hasPrev, hasNext, list: posts } = useSelector(state => state.posts)
    const dsp = useDispatch()
    const history = useHistory()

    useEffect(() => dsp(loadPosts({topic_id: match.params.topic_id})), [])

    const [message, setMessage] = useState('')

    const newReply = e => {
        e.preventDefault()

        dsp(replyTopic({
            board_id: match.params.board_id,
            topic_id: match.params.topic_id,
            data: { message },
            pushHistory: history.push
        }))
    }

    const loadNewPage = page => dsp(loadPosts({
        topic_id: match.params.topic_id,
        pagesOnly: true,
        page
    }))

    return (
        <div className="container">
            <ol className="breadcrumb my-4">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={ `/boards/${match.params.board_id}/topics/` }>{ isLoading || !board ? '' : board }</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={ `/boards/${match.params.board_id}/topics/${match.params.topic_id}/posts/` }>{ isLoading || !topic ? '' : topic }</Link>
                </li>
                <li className="breadcrumb-item active">
                    <span>Reply topic</span>
                </li>
            </ol>

            <form onSubmit={e => newReply(e)} className="mb-4">
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

            {
                posts.map((post, index) => <Post key={post.id} post={post} topic={topic} isFirst={index===0} params={match.params}/>)
            }

            <Pagination {...{
                pages, hasPrev, hasNext, cb: loadNewPage
            }}/>
        </div>
    )
}

export default ReplyPost
