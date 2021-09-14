import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTweets, getData, refreshTweets } from '../actions/feeds/feedActions'
import Tweet from '../components/feeds/Tweet'
import RefreshButton from '../components/buttons/RefreshButton'

class TweetsContainer extends Component {

  componentDidMount(){
    this.props.getTweets()
    this.props.getData()
  }

  handleRefreshClick = feed => {
    this.props.refreshTweets(feed)
  }

  render() {
    const tweets = this.props.tweets
    const filteredTweets = tweets.filter(tweet => tweet.feed_id === this.props.feed.id)
    const orderedTweets = filteredTweets.sort((a,b) => {
      const dateA = new Date(a.created_at).getTime()
      const dateB = new Date(b.created_at).getTime()
      return dateA < dateB ? 1 : -1
    }).slice(0,20)
    const tweetComponents = orderedTweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)

    return (
      <div className='tweets-container'>
        <RefreshButton handleOnClick={this.handleRefreshClick} feed={this.props.feed} />
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

export default connect(mapStateToProps, { getTweets, getData, refreshTweets })(TweetsContainer)