import {
    BOARDS_LOADING,
    BOARDS_LOADED,
    BOARD_REMOVED,
    BOARD_LOADED,
    BOARD_LOADING,
    BOARD_CLEARED
} from 'actions/types'

const initialState = {
    list: [],
    board: null,
    isLoading: false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case BOARDS_LOADING:
        case BOARD_LOADING:
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
        case BOARD_LOADED:
            return {
                ...state,
                isLoading: false,
                board: action.payload
            }
        case BOARD_REMOVED:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload)
            }
        case BOARD_CLEARED:
            return {
                ...state,
                isLoading: false,
                board: null
            }
        default:
            return state
    }
}