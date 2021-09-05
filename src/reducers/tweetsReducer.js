const initialState = {
  tweets: [],
  requesting: false
}

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'LOADING_TWEETS':
    return { 
      ...state, 
      tweets: [...state.tweets],
      requesting: true
    }
  case 'ADD_TWEETS':
    return {
      ...state,
      tweets: action.tweets,
      requesting: false
    }
  case 'DELETE_TWEETS':
    return {
      ...state,
      tweets: state.tweets.filter(tweet => tweet.feed_id !== action.feed.id),
      requesting: false
    }
  default:
    return state
  }
}

export default tweetsReducer