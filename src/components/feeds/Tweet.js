import React from 'react'

const Tweet = props => {
  return (
    <div className="panel-body">
      {props.tweet.content}
    </div>
  )
}

export default Tweet