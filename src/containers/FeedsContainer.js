import React, { Component } from 'react'
import { connect } from 'react-redux'
import Feed from '../components/feeds/Feed'
import NewFeed from '../components/forms/NewFeed'
import { addFeed, getFeeds, deleteFeed, getData } from '../actions/feeds/feedActions'

class FeedsContainer extends Component {

  handleDeleteClick = feed => {
    this.props.deleteFeed(feed)
  }

  whatToRender = () => {
    const feeds = this.props.feeds
    if(feeds.length === 4){
      return feeds.map(feed => <Feed feed={feed} key={feed.handle} handleDeleteClick={this.handleDeleteClick} />)
    } else if (feeds.length > 0){
      const feedList = feeds.map(feed => <Feed feed={feed} key={feed.handle} handleDeleteClick={this.handleDeleteClick} />)
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
      this.props.getData()
      return forms
    }
  }

  componentDidMount(){
    this.props.getFeeds()
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
    feeds: state.feeds
  })
}

export default connect(mapStateToProps, { addFeed, getFeeds, deleteFeed, getData })(FeedsContainer)