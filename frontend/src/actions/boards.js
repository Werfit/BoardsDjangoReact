import axios from 'axios'
import { createError } from './alerts'
import tokenConfig from 'utils/tokenConfig'

import {
    BOARDS_LOADING,
    BOARDS_LOADED,
    CREATE_BOARD
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
        const result = await axios.post('api/v1/boards/', data, tokenConfig(getState))

        dispatch({
            type: CREATE_BOARD,
            payload: result.data
        })

        pushHistory('/boards/')
    } catch (err) { dispatch(createError(err.response.data)) }
}