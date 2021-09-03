const initialState = {
  feeds: [
    {
      handle: '@example1',
      tweets: ['Oh man!']
    },
    {
      handle: '@example2',
      tweets: ['My first tweet!', 'Another tweet']
    }
  ], 
  requesting: false
}

const rootReducer = (state = initialState, action) => {
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
    default:
      return state
  }
}

export default rootReducer