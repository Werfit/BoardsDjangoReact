import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { loadPosts } from 'actions/posts'

import PostItem from '../boards/PostItem'
import Pagination from '../common/Pagination'
import Loader from '../common/Loader'


const Posts = ({ match }) => {
    const { list: posts, board, topic, isLoading, hasNext, hasPrev, pages } = useSelector(state => state.posts)
    const dsp = useDispatch()

    useEffect(() => dsp(loadPosts({ topic_id: match.params.topic_id })), [])
    const changePage = page => dsp(loadPosts({
        topic_id: match.params.topic_id,
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
                <li className="breadcrumb-item active">{ isLoading || !topic ? '' : topic }</li>
            </ol>
            <div className="mb-4">
                <Link className="btn btn-primary" role="button"
                    to={ `/boards/${match.params.board_id}/topics/${match.params.topic_id}/posts/reply/`
                }>Reply</Link>
            </div>
            {
                isLoading ? 
                    <Loader /> :
                        posts.map((post, index) => <PostItem key={ post.id } post={ post } isFirst={ index == 0 } topic={ topic } params={match.params} />)
            }
            {
                posts.length === 0 && <div className="alert alert-info">No posts here yet</div>
            }

            <Pagination {...{
                pages, hasNext, hasPrev, cb: changePage
            }}/>
        </div>
    )
}

export default Posts
