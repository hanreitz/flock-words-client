import React from 'react'
import ReactWordcloud from 'react-wordcloud'

const Wordcloud = props => {

  const options = {
    fontSizes: [32,64]
    // change mouseover
  }

  return(
    <div className='wordcloud'>
      <ReactWordcloud words={props.data.data} options={options} />
    </div>
  )
}

export default Wordcloud