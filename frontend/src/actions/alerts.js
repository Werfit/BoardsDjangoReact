import {
    ERROR_CREATE,
    MESSAGE_CREATE,
    ALERTS_CLEAR
} from './types'

export const createError = err => ({
    type: ERROR_CREATE,
    payload: Object.entries(err)
})

export const createMessage = msg => ({
        type: MESSAGE_CREATE,
        payload: msg
})

export const clearAlerts = () => dispatch => dispatch({ type: ALERTS_CLEAR })
