const initialState = {
  feeds: [],
  requesting: false
}

const feedsReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state
  }
}

export default feedsReducer