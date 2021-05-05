import {
    TOKEN_CHECKING,
    TOKEN_CHECKED,
    TOKEN_FAILED
} from 'actions/types'

const initialState = {
    user: null,
    isLoading: false,
    status: null
}

export default (state=initialState, action) => {
    switch (action.type) {
        case TOKEN_CHECKING:
            return {
                ...state,
                isLoading: true
            }
        case TOKEN_CHECKED:
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                status: 'SUCCESS'
            }
        case TOKEN_FAILED:
            return {
                ...state,
                isLoading: false,
                status: 'ERROR'
            }
        default:
            return state
    }
}