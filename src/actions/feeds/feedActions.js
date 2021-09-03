export const addFeed = handle => {
  return (dispatch) => {
    dispatch({type: 'LOADING_FEED'})
    const feed = {
      handle: handle,
      user_id: 1
    }
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feed)
    }
    fetch('http://localhost:3000/feeds', configObj)
    .then(resp => resp.json())
    .then(feed => dispatch({
      type: 'ADD_FEED',
      feed: feed
    }))
  }
}

export const getFeeds = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_FEEDS'})
    fetch('http://localhost:3000/feeds')
    .then(resp => resp.json())
    .then(feeds => dispatch({
      type: 'ADD_FEEDS',
      feeds: feeds
    }))
  }
}

export const getTweets = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_TWEETS'})
    fetch(`http://localhost:3000/tweets`)
    .then(resp => resp.json())
    .then(tweets => dispatch({
      type: 'ADD_TWEETS',
      tweets: tweets
    }))
  }
}