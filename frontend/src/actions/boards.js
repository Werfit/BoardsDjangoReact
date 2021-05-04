import axios from 'axios'
import { createError } from './alerts'

import {
    BOARDS_LOADING,
    BOARDS_LOADED
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