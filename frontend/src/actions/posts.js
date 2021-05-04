import axios from 'axios'
import { createError } from './alerts'

import {
    POSTS_LOADING,
    POSTS_LOADED
} from './types'


export const loadPosts = topic_id => async dispatch => {
    dispatch({ type: POSTS_LOADING })

    try {
        const result = await axios.get(`/api/v1/boards/${topic_id}/posts/`)

        dispatch({
            type: POSTS_LOADED,
            payload: result.data
        })
    } catch (err) { dispatch(createError(err.response.data)) }
}