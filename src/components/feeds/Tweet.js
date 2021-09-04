import React from 'react'

const Tweet = props => {
  return (
    <div className='tweet-card'>
      {props.tweet.content}
    </div>
  )
}

export default Tweet