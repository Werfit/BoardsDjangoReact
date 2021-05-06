import {
    POSTS_LOADING,
    POSTS_LOADED,
    BOARD_TOPIC_NAMES_LOADED,
    BOARD_TOPIC_NAMES_LOADING
} from 'actions/types'

const initialState = {
    list: [],
    board: null,
    topic: null,
    isLoading: false,
    pages: 0,
    hasNext: null,
    hasPrev: null
}

export default (state=initialState, action) => {
    switch (action.type) {
        case POSTS_LOADING:
        case BOARD_TOPIC_NAMES_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case POSTS_LOADED:
            return {
                ...state,
                isLoading: false,
                list: action.payload.results,
                hasNext: action.payload.has_next,
                hasPrev: action.payload.has_previous,
                board: action.payload.board,
                topic: action.payload.topic,
                pages: action.payload.pages
            }
        case BOARD_TOPIC_NAMES_LOADED:
            return {
                ...state,
                isLoading: false,
                board: action.payload.board,
                topic: action.payload.subject
            }
        default:
            return state
    }
}