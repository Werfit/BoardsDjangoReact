import axios from 'axios'
import tokenConfig from 'utils/tokenConfig'

import { createMessage, createError } from './alerts'

import {
    PASSWORD_CHANGE_FAILED,
    PROFILE_LOADED,
    PROFILE_LOADING,
    PROFILE_PATCHED
} from './types'


export const getProfileData = () => async (dispatch, getState) => {
    dispatch({ type: PROFILE_LOADING })

    try {
        const result = await axios.get('/api/v1/accounts/settings/profile/', tokenConfig(getState))

        dispatch({
            type: PROFILE_LOADED,
            payload: result.data
        })
    } catch (err) { dispatch(createError(err.response.data)) }
}


export const patchProfileData = data => async (dispatch, getState) => {
    try {
        const result = await axios.patch('/api/v1/accounts/settings/profile/', data, tokenConfig(getState))

        dispatch({
            type: PROFILE_PATCHED,
            payload: result.data
        })

        dispatch(createMessage('Data successfully updated!'))
    } catch (err) { dispatch(createError(err.response.data)) }
}

export const changePasswords = data => async (dispatch, getState) => {
    const _data = {
        old_password: data.oldPassword,
        new_password: data.newPassword
    }

    try {
        const result = await axios.post('/api/v1/accounts/settings/password/', _data, tokenConfig(getState))

        dispatch(createMessage(result.data))
    } catch (err) {
        dispatch({
            type: PASSWORD_CHANGE_FAILED,
            payload: err.response.data
        })
    }
}