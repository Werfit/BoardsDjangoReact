import {
    ERROR_CREATE,
    MESSAGE_CREATE,
    ALERTS_CLEAR
} from 'actions/types'

const initialState = {
    errors: null,
    msgs: null
}

export default (state=initialState, action) => {
    switch (action.type) {
        case ERROR_CREATE:
            return {
                ...state,
                errors: action.payload
            }
        case MESSAGE_CREATE:
            return {
                ...state,
                msgs: action.payload
            }
        case ALERTS_CLEAR:
            return {
                ...state,
                errors: null,
                msgs: null
            }
        default:
            return state
    }
}