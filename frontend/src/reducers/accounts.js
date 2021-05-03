import {
    USER_LOADING,
    USER_LOGIN,
    USER_REGISTER,
    USER_LOGOUT,
    USER_FAILED,
    USER_LOADED
} from 'actions/types'

const initialState = {
    user: null,
    token: localStorage.getItem('usr_token') || '',
    isLoading: false,
    errors: []
}

export default (state=initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOGIN:
        case USER_REGISTER:
            localStorage.setItem('usr_token', action.payload.token)
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                token: action.payload.token
            }
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }
        case USER_LOGOUT:
            localStorage.removeItem('usr_token')
            return {
                ...state,
                isLoading: false,
                user: null,
                token: '',
                errors: []
            }
        case USER_FAILED:
            localStorage.removeItem('usr_token')
            return {
                ...state,
                isLoading: false,
                user: null,
                token: '',
                errors: action.payload
            }
        default:
            return state
    }
}