import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const TopicItem = ({ topic, board_id }) => {
    return (
        <tr className="infinite-item">
            <td>
                <Link to={ `/boards/${board_id}/topics/${topic.id}/posts/` }>{ topic.subject }</Link>
            </td>
            <td>{ topic.starter }</td>
            <td>{ topic.replies }</td>
            <td>{ topic.views }</td>
            <td>{ moment(topic.updated_at).fromNow() }</td>
        </tr>
    )
}

export default TopicItem
