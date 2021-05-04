import {
    PROFILE_LOADING,
    PROFILE_LOADED,
    PROFILE_PATCHED
} from 'actions/types'

// Named this way because backend responses have this names
const initialState = {
    profile: null,
    isLoading: false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case PROFILE_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case PROFILE_LOADED:
            return {
                ...state,
                isLoading: false,
                profile: {...action.payload}
            }
        case PROFILE_PATCHED:
            return {
                ...state,
                profile: {...action.payload}
            }
        default:
            return state
    }
}