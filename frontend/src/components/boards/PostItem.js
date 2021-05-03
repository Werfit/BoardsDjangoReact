import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

import UserImage from 'assets/img/user.png'

const PostItem = ({ post, topic, isFirst }) => {
    const { user } = useSelector(state => state.accounts)
    return (
        <div className={ `card ${ isFirst ? `mb-4 border-dark` : `mb-2` } border-dark` }>
            { isFirst && <div className="card-header text-white bg-dark py-2 px-3">
                { topic }
            </div> }
            <div className="card-body p-3">
                <div className="row">
                    <div className="col-2">
                        <img className="w-100" src={ UserImage } alt={ post.created_by.username } />
                        <small>Posts: { post.created_by.posts }</small>
                    </div>
                    <div className="col-10">
                        <div className="row mb-3">
                            <div className="col-6">
                                <strong className="text-muted">{ post.created_by.username }</strong>
                            </div>
                            <div className="col-6 text-right">
                                <strong className="text-muted">{ moment(post.created_at).fromNow() }</strong>
                            </div>
                        </div>
                        { post.message }
                        {/* Check if logged in user is creator of the post */}
                        {
                            (user && user.username === post.created_by.username) && (
                                <div className="mt-3">
                                    <a className="btn btn-primary btn-sm" href="{% url 'edit_post' post.topic.board.pk post.topic.pk post.pk %}" role="button">Edit</a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem
