import axios from 'axios'
import tokenConfig from 'utils/tokenConfig'

import {
    USER_LOGIN,
    USER_LOADING,
    USER_REGISTER,
    USER_LOADED,
    USER_LOGOUT,
    USER_FAILED,
    USER_LOADING_FAIELD
} from './types'

export const loginUser = data => async (dispatch, getState) => {
    dispatch({ type: USER_LOADING })

    try {
        const result = await axios.post('/api/v1/accounts/login/', data, tokenConfig(getState))

        dispatch({
            type: USER_LOGIN,
            payload: result.data
        })
    } catch (err) {
        dispatch({
            type: USER_FAILED,
            payload: err.response.data
        })
    }
}

export const registerUser = data => async (dispatch, getState) => {
    try {
        const result = await axios.post('api/v1/accounts/register/', data, tokenConfig(getState))

        dispatch({
            type: USER_REGISTER,
            payload: result.data
        })
    } catch (err) {
        dispatch({
            type: USER_FAILED,
            payload: err.response.data
        })
    }
}

export const loadUser = () => async (dispatch, getState) => {
    dispatch({ type: USER_LOADING })

    try {
        const result = await axios.get('api/v1/accounts/user/', tokenConfig(getState))

        dispatch({
            type: USER_LOADED,
            payload: result.data
        })
    } catch (err) { dispatch({ type: USER_LOADING_FAIELD }) }
}

export const logoutUser = () => async (dispatch, getState) => {
    try {
        const result = await axios.post('api/v1/accounts/logout/', null, tokenConfig(getState))

        dispatch({
            type: USER_LOGOUT,
            payload: result.data
        })
    } catch (err) {
        dispatch({
            type: USER_FAILED,
            payload: err.response.data
        })
    }
}