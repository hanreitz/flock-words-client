import React from 'react'
import TweetsContainer from '../../containers/TweetsContainer'
import DeleteButton from '../../components/buttons/DeleteButton'

const Feed = props => {
  return (
    <div className='feed-card'>
      <DeleteButton handleOnClick={props.handleDeleteClick} feed={props.feed} />
      <h3>{props.feed.handle}</h3>
      <TweetsContainer feed={props.feed} />
    </div>
  )
}

export default Feed