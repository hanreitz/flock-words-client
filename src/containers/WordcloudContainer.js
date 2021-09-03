import React, { Component } from 'react'
import Wordcloud from '../components/wordcloud/Wordcloud'

export default class WordcloudContainer extends Component {
  render() {
    return (
      <div className='wordcloud-container'>
        <Wordcloud />
      </div>
    )
  }
}
