import React from 'react'
import ReactWordcloud from 'react-wordcloud'

const Wordcloud = props => {

  const options = {
    fontSizes: [32,90]
    // change mouseover
  }

  return(
    <div className='wordcloud'>
      <ReactWordcloud words={props.data} options={options} />
    </div>
  )
}

export default Wordcloud