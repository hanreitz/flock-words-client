import React from 'react'

const Tweet = props => {
  return (
    <div className="well well-sm">
      {props.tweet.content}
    </div>
  )
}

export default Tweet