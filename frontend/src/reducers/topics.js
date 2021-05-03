import {
    TOPICS_LOADING,
    TOPICS_LOADED,
    BOARD_NAME_LOADING,
    BOARD_NAME_LOADED,
    TOPIC_CREATED
} from 'actions/types'

const initialState = {
    list: [],
    board: null,
    isLoading: false,
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
                list: action.payload.topics,
                board: action.payload.board,
            }
        case BOARD_NAME_LOADED:
            return {
                ...state,
                board: action.payload.name,
                isLoading: false,
            }
        case TOPIC_CREATED:
            return {
                ...state,
                list: [action.payload, ...state.list],
            }
        default:
            return state
    }
}