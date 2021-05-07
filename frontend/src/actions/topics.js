import axios from 'axios'
import tokenConfig from 'utils/tokenConfig'
import { createError } from './alerts'

import {
    TOPICS_LOADING,
    TOPICS_LOADED,
    TOPICS_CLEAR,

    BOARD_NAME_LOADING,
    BOARD_NAME_LOADED
} from './types'

export const loadTopics = ({ board_id, page=1 }) => async dispatch => {
    dispatch({ type: TOPICS_LOADING })

    try {
        const result = await axios.get(`/api/v1/boards/${board_id}/topics/?page=${page}`)

        dispatch({
            type: TOPICS_LOADED,
            payload: result.data
        })
    } catch (err) { dispatch(createError(err.response.data)) }
}

// Get board name for breadcrumb
export const loadBoardName = board_id => async dispatch => {
    dispatch({ type: BOARD_NAME_LOADING })

    try {
        const result = await axios.get(`/api/v1/boards/${board_id}`)

        dispatch({
            type: BOARD_NAME_LOADED,
            payload: result.data
        })
    } catch (err) { dispatch(createError(err.response.data)) }
}

// Create new topic
export const createTopic = ({ board_id, data, pushHistory }) => async (dispatch, getState) => {
    try {
        await axios.post(`/api/v1/boards/${board_id}/topics/`, data, tokenConfig(getState))

        // Redirect user to topic page
        pushHistory(`/boards/${board_id}/topics/`)
    } catch (err) { dispatch(createError(err.response.data)) }
}

export const replyTopic = ({ board_id, topic_id, data, pushHistory }) => async (dispatch, getState) => {
    try {
        await axios.post(`/api/v1/boards/${topic_id}/posts/`, data, tokenConfig(getState))

        // Redirect user to post page
        pushHistory(`/boards/${board_id}/topics/${topic_id}/posts/`)
    } catch (err) { dispatch(createError(err.response.data)) }
}

// Makes `list` array empty
export const clearTopics = () => dispatch => dispatch({type: TOPICS_CLEAR})