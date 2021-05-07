import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

class TopicItem extends React.Component {
    render() {
        return (
            <tr ref={this.props.parentRef} className="infinite-item">
                <td>
                    <Link to={ `/boards/${this.props.board_id}/topics/${this.props.topic.id}/posts/` }>{ this.props.topic.subject }</Link>
                </td>
                <td>{ this.props.topic.starter }</td>
                <td>{ this.props.topic.replies }</td>
                <td>{ this.props.topic.views }</td>
                <td>{ moment(this.props.topic.updated_at).fromNow() }</td>
            </tr>
        )
    }
}

export default TopicItem
