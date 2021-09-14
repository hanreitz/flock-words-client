import React from 'react'

const RefreshButton = props => {
  return (
    <button onClick={() => props.handleOnClick(props.feed)}>Refresh</button>
  )
}

export default RefreshButton