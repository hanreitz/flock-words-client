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
    case 'START_ADDING_FEED_REQUEST':
      return {
        ...state, 
        feeds: [...state.feeds],
        requesting: true
      }
    case 'ADD_FEED':
      return {
        ...state,
        feeds: action.feeds,
        requesting: false
      }
    default:
      return state
  }
}

export default rootReducer