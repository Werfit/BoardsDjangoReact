import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { loadTopics } from 'actions/topics'

import TopicItem from '../boards/TopicItem'
import Loader from '../common/Loader'

const Topics = ({ match }) => {
    const { list: topics, board, isLoading } = useSelector(state => state.topics)
    const dsp = useDispatch()

    useEffect(() => dsp(loadTopics(match.params.board_id)), [])

    return (
        <div className="container">
            <ol className="breadcrumb my-4">
                <li className="breadcrumb-item">
                    <Link to='/'>Home</Link>
                </li>
                <li className="breadcrumb-item active">{ isLoading || !board ? '' : board }</li>
            </ol>
            <div className="mb-4">
                <Link className="btn btn-primary" to={ `/boards/${match.params.board_id}/topics/new/` }>New topic</Link>
            </div>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>Topic</th>
                        <th>Starter</th>
                        <th>Replies</th>
                        <th>Views</th>
                        <th>Last Update</th>
                    </tr>
                </thead>
                <tbody className="infinite-container">
                    {
                        isLoading ? <Loader isTable={ true } /> : topics.map(topic => <TopicItem key={ topic.id } topic={ topic } board_id={ match.params.board_id } />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Topics
