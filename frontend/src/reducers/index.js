import { combineReducers } from 'redux'

import BoardsReducer from './boards'
import TopicsReducer from './topics'
import PostsReducer from './posts'
import AccountsReducer from './accounts'

export default combineReducers({
    boards: BoardsReducer,
    topics: TopicsReducer,
    posts: PostsReducer,
    accounts: AccountsReducer
})