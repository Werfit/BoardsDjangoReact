import axios from 'axios'
import tokenConfig from 'utils/tokenConfig'

import {
    TOKEN_CHECKING,
    TOKEN_CHECKED,
    TOKEN_FAILED,

    PASSWORD_CHANGE_FAILED
} from './types'


export const sendEmail = (email, showNotification) => async (dispatch, getState) => {
    try {
        const result = await axios.post('/api/v1/accounts/password-reset/', { email }, tokenConfig(getState))

        // pushHistory(`/password-reset/${result.data['uidb64']}/${result.data['token']}/`)
        showNotification()
    } catch (err) {
        dispatch({ 
            type: PASSWORD_CHANGE_FAILED,
            payload: err.response.data
        })
    }
}


export const checkToken = (uidb64, token) => async (dispatch, getState) => {
    dispatch({ type: TOKEN_CHECKING })

    try {
        const result = await axios.get(`/api/v1/accounts/password-reset/${uidb64}/${token}/`, tokenConfig(getState))

        dispatch({
            type: TOKEN_CHECKED,
            payload: result.data
        })
    } catch (err) { dispatch({ type: TOKEN_FAILED }) }
}