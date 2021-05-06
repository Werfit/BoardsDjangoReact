import {
    TOPICS_LOADING,
    TOPICS_LOADED,
    BOARD_NAME_LOADING,
    BOARD_NAME_LOADED,
    TOPICS_CLEAR
} from 'actions/types'

const initialState = {
    list: [],
    board: null,
    isLoading: false,
    pages: 0,
    hasPrev: null,
    hasNext: null,
    currentPage: null
}

export default (state=initialState, action) => {
    switch (action.type) {
        case TOPICS_LOADING:
        case BOARD_NAME_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case TOPICS_LOADED:
            return {
                ...state,
                isLoading: false,
                list: [...state.list, ...action.payload.results],
                currentPage: action.payload.current_page,
                hasNext: action.payload.has_next,
                hasPrev: action.payload.has_previous,
                board: action.payload.board,
                pages: action.payload.pages
            }
        case BOARD_NAME_LOADED:
            return {
                ...state,
                board: action.payload.name,
                isLoading: false,
            }
        case TOPICS_CLEAR:
            return {
                ...state,
                list: [],
                board: null,
                isLoading: false,
                pages: 0,
                hasPrev: null,
                hasNext: null,
                currentPage: null
            }
        default:
            return state
    }
}