import React, { Component } from 'react'
import { connect } from 'react-redux'
import Feed from '../components/feeds/Feed'
import NewFeed from '../components/forms/NewFeed'
import { addFeed, getFeeds } from '../actions/feeds/feedActions'

class FeedsContainer extends Component {

  whatToRender = () => {
    if(this.props.feeds.length === 4){
      return this.props.feeds.map(feed => <Feed feed={feed} key={feed.handle} />)
    } else if (this.props.feeds.length > 0){
      const feeds = this.props.feeds.map(feed => <Feed feed={feed} key={feed.handle} />)
      const forms = []
      for(let i=0; i<(4-this.props.feeds.length); i++){
        forms.push(<NewFeed key={i} addFeed={this.props.addFeed} />)
      }
      return feeds.concat(forms)
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
  return { feeds: state.feeds }
}

export default connect(mapStateToProps, { addFeed, getFeeds })(FeedsContainer)