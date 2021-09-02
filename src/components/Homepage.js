import React from 'react'
import WordcloudContainer from '../containers/WordcloudContainer'
import FeedsContainer from '../containers/FeedsContainer'

export default function Homepage() {
  return (
    <div>
      <WordcloudContainer />
      <FeedsContainer />
    </div>
  )
}
