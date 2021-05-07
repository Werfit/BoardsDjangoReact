import {
    POSTS_LOADING,
    POSTS_LOADED,
    BOARD_TOPIC_NAMES_LOADED,
    BOARD_TOPIC_NAMES_LOADING,

    POST_LOADING,
    POST_LOADED
} from 'actions/types'

const initialState = {
    list: [],
    board: null,
    topic: null,
    isLoading: false,
    pages: 0,
    hasNext: null,
    hasPrev: null,
    post: null
}

export default (state=initialState, action) => {
    switch (action.type) {
        case POSTS_LOADING:
        case BOARD_TOPIC_NAMES_LOADING:
        case POST_LOADING:
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
                pages: action.payload.pages,
            }
        case BOARD_TOPIC_NAMES_LOADED:
            return {
                ...state,
                isLoading: false,
                board: action.payload.board,
                topic: action.payload.subject
            }
        case POST_LOADED:
            return {
                ...state,
                isLoading: false,
                post: action.payload.post,
                board: action.payload.board,
                topic: action.payload.topic
            }
        default:
            return state
    }
}