import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTweets } from '../actions/feeds/feedActions'
import Tweet from '../components/feeds/Tweet'

class TweetsContainer extends Component {

  componentDidMount(){
    this.props.getTweets()
  }

  render() {
    const tweets = this.props.tweets
    const filteredTweets = tweets.filter(tweet => tweet.feed_id === this.props.feed.id)
    const tweetComponents = filteredTweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
    
    return (
      <div className='tweets-container'>
        {tweetComponents}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tweets: state.tweets
  }
}

export default connect(mapStateToProps, { getTweets })(TweetsContainer)