import React, { Component } from 'react'
import Wordcloud from '../components/wordcloud/Wordcloud'
import { connect } from 'react-redux'
import { getData } from '../actions/feeds/feedActions'

class WordcloudContainer extends Component {

  render() {
    const data = this.props.data
    const tweets = this.props.tweets
  
    return (
      <div className='wordcloud-container'>
        <Wordcloud data={data} tweets={tweets} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    tweets: state.tweets
  }
}

export default connect(mapStateToProps, { getData })(WordcloudContainer)