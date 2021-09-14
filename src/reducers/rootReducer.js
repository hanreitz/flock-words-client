const initialState = {
  feeds: [],
  tweets: [],
  data: [],
  requesting: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // feeds
    case 'LOADING_FEED':
      return {
        ...state, 
        feeds: [...state.feeds],
        requesting: true
      }
    case 'ADD_FEED':
      return {
        ...state,
        feeds: state.feeds.concat(action.feed),
        requesting: false
      }
    case 'LOADING_FEEDS':
      return {
        ...state,
        feeds: [...state.feeds],
        requesting: true
      }
    case 'ADD_FEEDS':
      return {
        ...state,
        feeds: action.feeds,
        requesting: false
      }
    case 'LOADING_DELETE_FEED':
      return {
        ...state,
        feeds: [...state.feeds],
        requesting: true
      }
    case 'DELETE_FEED':
      return {
        ...state,
        feeds: state.feeds.filter(feed => feed !== action.feed),
        requesting: false
      }
    // tweets
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
    case 'LOADING_REFRESH_TWEETS':
      return {
        ...state,
        tweets: [...state.tweets],
        requesting: true
      }
    case 'REFRESH_TWEETS':
      return {
        ...state,
        tweets: action.tweets,
        requesting: false
      }
    // data
    case 'LOADING_DATA':
      return {
        ...state,
        data: [...state.data],
        requesting: true
      }
    case 'ADD_DATA':
      return {
        ...state,
        data: action.data,
        requesting: false
      }
    // default
    default:
      return state
  }
}

export default rootReducer