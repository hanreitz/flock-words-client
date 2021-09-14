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
    .then(feed => {
      if(feed.message) {
        alert(feed.message)
      } else {
        dispatch({
          type: 'ADD_FEED',
          feed: feed
        })
      }
    })
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

export const getData = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_DATA' })
    fetch('http://localhost:3000/data')
    .then(resp => resp.json())
    .then(data => dispatch({
      type: 'ADD_DATA',
      data: data
    }))
  }
}

export const deleteFeed = feed => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_DELETE_FEED' })
    fetch(`http://localhost:3000/feeds/${feed.id}`, { method: 'DELETE' })
    .then(() => dispatch({
      type: 'DELETE_TWEETS',
      feed: feed
    }))
    .then(() => dispatch({
      type: 'DELETE_FEED',
      feed: feed
    }))
  }
}

export const refreshTweets = feed => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_REFRESH_TWEETS' })
    fetch(`http://localhost:3000/feeds/${feed.id}/refresh`)
    .then(resp => resp.json())
    .then(tweets => dispatch ({
      type: 'REFRESH_TWEETS',
      tweets: tweets
    }))
  }
}
