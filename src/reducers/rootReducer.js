import { combineReducers } from 'redux'
import feedsReducer from "./feedsReducer"
import tweetsReducer from "./tweetsReducer"
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
  feeds: feedsReducer, 
  tweets: tweetsReducer, 
  data: dataReducer
})

export default rootReducer