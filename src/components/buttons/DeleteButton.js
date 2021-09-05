import React from 'react'

const DeleteButton = props => {
  return (
    <button onClick={() => props.handleOnClick(props.feed)}>
      X
    </button>
  )
}

export default DeleteButton