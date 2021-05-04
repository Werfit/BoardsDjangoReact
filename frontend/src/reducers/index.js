import { combineReducers } from 'redux'

import BoardsReducer from './boards'
import TopicsReducer from './topics'
import PostsReducer from './posts'
import AccountsReducer from './accounts'
import ProfileReducer from './profile'
import AlertsReducer from './alerts'

export default combineReducers({
    boards: BoardsReducer,
    topics: TopicsReducer,
    posts: PostsReducer,
    accounts: AccountsReducer,
    profile: ProfileReducer,
    alerts: AlertsReducer
})