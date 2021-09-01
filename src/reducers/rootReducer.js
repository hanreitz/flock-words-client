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
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state
  }
}

export default rootReducer