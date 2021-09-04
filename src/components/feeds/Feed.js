import React from 'react'
import TweetsContainer from '../../containers/TweetsContainer'

const Feed = props => {
  return (
    <div className='feed-card'>
      <h3>{props.feed.handle}</h3>
      <TweetsContainer feed={props.feed} />
    </div>
  )
}

export default Feed