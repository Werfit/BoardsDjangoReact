import axios from 'axios'
import tokenConfig from 'utils/tokenConfig'

import {
    TOPICS_LOADING,
    TOPICS_LOADED,

    BOARD_NAME_LOADING,
    BOARD_NAME_LOADED,

    TOPIC_CREATED,
    TOPIC_REPLY
} from './types'

export const loadTopics = board_id => async dispatch => {
    dispatch({ type: TOPICS_LOADING })

    try {
        const result = await axios.get(`/api/v1/boards/${board_id}/topics/`)

        dispatch({
            type: TOPICS_LOADED,
            payload: result.data
        })
    } catch (err) {
        console.error('ERROR OCCURED')
        console.log(err.response)
    }
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
    } catch (err) {
        console.error('ERROR OCCURED')
        console.log(err.response)
    }
}

// Create new topic
export const createTopic = ({ board_id, data, pushHistory }) => async (dispatch, getState) => {
    try {
        const result = await axios.post(`/api/v1/boards/${board_id}/topics/`, data, tokenConfig(getState))

        dispatch({
            type: TOPIC_CREATED,
            payload: result.data
        })

        // Redirect user to topic page
        pushHistory(`/boards/${board_id}/topics/`)
    } catch (err) {
        console.error('ERROR OCCURED')
        console.log(err.response)
    }
}

export const replyTopic = ({ board_id, topic_id, data, pushHistory }) => async (dispatch, getState) => {
    try {
        const result = await axios.post(`/api/v1/boards/${topic_id}/posts/`, data, tokenConfig(getState))

        dispatch({
            type: TOPIC_REPLY,
            payload: result.data
        })

        // Redirect user to post page
        pushHistory(`/boards/${board_id}/topics/${topic_id}/posts/`)
    } catch (err) {
        console.error('ERROR OCCURED')
        console.log(err.response)
    }
}