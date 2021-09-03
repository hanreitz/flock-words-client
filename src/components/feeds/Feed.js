import React from 'react'

const Feed = props => {
  return (
    <div className='feed-card'>
      {props.feed.handle}
    </div>
  )
}

export default Feed