import axios from 'axios'
import { createError } from './alerts'
import tokenConfig from 'utils/tokenConfig'

import {
    BOARDS_LOADING,
    BOARDS_LOADED,
    BOARD_REMOVED,
    BOARD_LOADED,
    BOARD_LOADING,
    BOARD_CLEARED
} from './types'


export const loadBoards = () => async dispatch => {
    dispatch({ type: BOARDS_LOADING })

    try {
        const result = await axios.get('/api/v1/boards/')

        dispatch({
            type: BOARDS_LOADED,
            payload: result.data
        })
    } catch (err) { dispatch(createError(err.response.data)) }
}

export const createBoard = ({ data, pushHistory }) => async (dispatch, getState) => {
    try {
        await axios.post('api/v1/boards/', data, tokenConfig(getState))
        pushHistory('/')
    } catch (err) { dispatch(createError(err.response.data)) }
}

export const removeBoard = board_id => async (dispatch, getState) => {
    try {
        await axios.delete(`/api/v1/boards/${board_id}/`, tokenConfig(getState))

        dispatch({
            type: BOARD_REMOVED,
            payload: board_id
        })
    } catch (err) { dispatch(createError(err.response.data)) }
}

export const updateBoard = ({ board_id, data, pushHistory }) => async (dispatch, getState) => {
    try {
        await axios.patch(`/api/v1/boards/${board_id}/`, data, tokenConfig(getState))
        pushHistory('/')
    } catch (err) { dispatch(createError(err.response.data)) }
}

export const loadBoard = board_id => async (dispatch, getState) => {
    dispatch({type: BOARD_LOADING})

    try {
        const result = await axios.get(`/api/v1/boards/${board_id}/`, tokenConfig(getState))

        dispatch({
            type: BOARD_LOADED,
            payload: result.data
        })
    } catch (err) { dispatch(createError(err.response.data)) }
}

export const clearBoard = () => dispatch => dispatch({type: BOARD_CLEARED})