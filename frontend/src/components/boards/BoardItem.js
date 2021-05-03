import React from 'react'
import { Link } from 'react-router-dom'

import moment from 'moment'

const BoardItem = ({ board }) => {
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
            <td>
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
        </tr>
    )
}

export default BoardItem
