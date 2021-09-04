import React, { Component } from 'react'
import Wordcloud from '../components/wordcloud/Wordcloud'
import { connect } from 'react-redux'

class WordcloudContainer extends Component {
  
  render() {
    const tweets = this.props.tweets.tweets
  
    return (
      <div className='wordcloud-container'>
        <Wordcloud tweets={tweets} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tweets: state.tweets
  }
}

export default connect(mapStateToProps)(WordcloudContainer)