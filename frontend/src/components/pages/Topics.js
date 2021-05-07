import React, { useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { loadTopics, clearTopics } from 'actions/topics'

import TopicItem from '../boards/TopicItem'
import Loader from '../common/Loader'

const Topics = ({ match }) => {
    const { 
        list: topics, board, isLoading, hasNext, currentPage
    } = useSelector(state => state.topics)
    const dsp = useDispatch()

    useEffect(() => {
        dsp(loadTopics({board_id: match.params.board_id}))
        return () => dsp(clearTopics())
    }, [])

    const loadNext = () => dsp(loadTopics({
        board_id: match.params.board_id,
        page: currentPage + 1
    }))

    const observer = useRef()
    const lastElementRef = useCallback(node => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasNext)
                loadNext()
        })
        if (node) observer.current.observe(node)
    }, [isLoading])

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
                        topics.map((topic, index) => {
                            if (topics.length === index + 1)
                                return <TopicItem key={topic.id} parentRef={lastElementRef} topic={topic} board_id={match.params.board_id} />
                            return <TopicItem key={topic.id} topic={topic} board_id={match.params.board_id} />
                        })
                    }
                    {
                        isLoading && <Loader isTable={true}/>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Topics
