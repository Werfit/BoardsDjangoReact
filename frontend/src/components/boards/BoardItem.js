import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import moment from 'moment'

import { removeBoard } from 'actions/boards'

const BoardItem = ({ board, bloggersDetails=false }) => {
    const dsp = useDispatch()

    const deleteBoard = () => dsp(removeBoard(board.id))

    return (
        <tr>
            <td>
                <Link to={ `/boards/${board.id}/topics/` }>{ board.name }</Link>
                <br />
                <small className="text-muted d-block">{ board.description }</small>
            </td>
            <td className="align-middle">
                { board.posts }
            </td>
            <td className="align-middle">
                { board.topics }
            </td>
            <td className="align-middle">
                {
                    board.last_post ? (
                        <small>
                            <Link to={ `/boards/${board.id}/topics/${board.last_post.topic}/posts/${board.last_post.id}/` }>
                                By { board.last_post.created_by } { moment(board.last_post.created_at).fromNow() }
                            </Link> 
                        </small>
                    ) : (
                        <small>
                            No posts yet.
                        </small>
                    )
                }
            </td>
            {
                bloggersDetails && (
                    <td className="align-middle">
                        <div className="btn btn-danger btn-lg me-2" onClick={deleteBoard}>D</div>
                        <Link className="btn btn-primary btn-lg ms-2" to={`/boards/${board.id}/`}>U</Link>
                    </td>
                )
            }
        </tr>
    )
}

export default BoardItem
