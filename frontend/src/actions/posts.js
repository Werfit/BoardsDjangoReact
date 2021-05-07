import axios from 'axios'
import tokenConfig from 'utils/tokenConfig'
import { createError } from './alerts'

import {
    POSTS_LOADING,
    POSTS_LOADED,
    POST_LOADING,
    POST_LOADED
} from './types'


export const loadPosts = ({topic_id, page=1}) => async dispatch => {
    dispatch({ type: POSTS_LOADING })

    try {
        const result = await axios.get(`/api/v1/boards/${topic_id}/posts/?page=${page}`)

        dispatch({
            type: POSTS_LOADED,
            payload: result.data
        })
    } catch (err) { dispatch(createError(err.response.data)) }
}

export const loadPost = ({topic_id, post_id}) => async (dispatch, getState) => {
    dispatch({type: POST_LOADING})
    try {
        const result = await axios.get(`/api/v1/boards/${topic_id}/posts/${post_id}/`, tokenConfig(getState))

        dispatch({
            type: POST_LOADED,
            payload: result.data
        })
    } catch (err) { dispatch(createError(err.response.data)) }
}

export const updatePost = ({board_id, topic_id, post_id, message, pushHistory}) => async (dispatch, getState) => {
    try {
        await axios.put(`/api/v1/boards/${topic_id}/posts/${post_id}/`, {topic_id, message}, tokenConfig(getState))

        pushHistory(`/boards/${board_id}/topics/${topic_id}/posts/`)
    } catch (err) { dispatch(createError(err.response.data)) }
}