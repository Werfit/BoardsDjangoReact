import {
    BOARDS_LOADING,
    BOARDS_LOADED
} from 'actions/types'

const initialState = {
    list: [],
    isLoading: false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case BOARDS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case BOARDS_LOADED:
            return {
                ...state,
                isLoading: false,
                list: action.payload
            }
        default:
            return state
    }
}