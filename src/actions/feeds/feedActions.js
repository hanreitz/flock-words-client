export const addFeed = handle => {
  return (dispatch) => {
    dispatch({type: 'LOADING_FEED'})
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(handle)
    }
    fetch('https://localhost:3000/feeds', configObj)
    .then(resp => resp.json())
    .then(feed => dispatch({
      type: 'ADD_FEED',
      feed: feed
    }))
  }
}