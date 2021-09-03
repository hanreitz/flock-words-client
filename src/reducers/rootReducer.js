import feedsReducer from "./feedsReducer"
import tweetsReducer from "./tweetsReducer"

const rootReducer = combineReducers({feeds: feedsReducer, tweets: tweetsReducer})

export default rootReducer