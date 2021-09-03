import React, { Component } from 'react'
import { connect } from 'react-redux'
import Feed from '../components/feeds/Feed'
import NewFeed from '../components/forms/NewFeed'
import { addFeed, getFeeds, getTweets } from '../actions/feeds/feedActions'

class FeedsContainer extends Component {

  whatToRender = () => {
    const feeds = this.props.feeds.feeds
    const tweets = this.props.tweets.tweets
    if(feeds.length === 4){
      return feeds.map(feed => <Feed feed={feed} tweets={tweets.filter(tweet => tweet.feed_id === feed.id)} key={feed.handle} />)
    } else if (this.props.feeds.feeds.length > 0){
      const feedList = feeds.map(feed => <Feed feed={feed} tweets={tweets.filter(tweet => tweet.feed_id = feed.id)} key={feed.handle} />)
      const forms = []
      for(let i=0; i<(4-feeds.length); i++){
        forms.push(<NewFeed key={i} addFeed={this.props.addFeed} />)
      }
      return feedList.concat(forms)
    } else {
      const forms = []
      for(let i=0; i<4; i++){
        forms.push(<NewFeed key={i} addFeed={this.props.addFeed} />)
      }
      return forms
    }
  }

  componentDidMount(){
    this.props.getFeeds()
    this.props.getTweets()
  }

  render() {

    return (
      <div className='feeds-container'>
        {this.whatToRender()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({ 
    feeds: state.feeds,
    tweets: state.tweets 
  })
}

export default connect(mapStateToProps, { addFeed, getFeeds, getTweets })(FeedsContainer)