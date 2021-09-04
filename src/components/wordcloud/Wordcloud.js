import React from 'react'
import ReactWordcloud from 'react-wordcloud'

const Wordcloud = props => {
  const sentenceList = props.tweets.map(tweet => tweet.content)
  const exclusionWords = "is the be to of and a in that have I I'm I've I'd it for not on with he as you do at this but his by from they we say her she or an will my one all would there their what so up out if about who get which go me when make can like time no just him know take people into year your good some could them see other than then now look only come its over think also back after use two how our work first well way even new want because any these give day most us hasn't ain't aren't could've would've should've couldn't didn't had've he'll how'll how're how's might've she'd he'd she'll they're they're we're we've can't won't shouldn't wouldn't haven't I'm ? .".split(' ')
  const wordList = sentenceList.map(sentence => sentence.split(' ')).flat().filter(word => !exclusionWords.includes(word)).filter(word => !word.includes('@')).filter(word => !word.includes('http'))
  let wordObject = []
  for(let i=0; i<wordList.length; i++){
    const wordInList = wordList[i]
    const existingWord = wordObject.find(word => word.text === wordInList)
    const index = wordObject.findIndex(word => word.text === wordInList)
    if(existingWord){
      wordObject = wordObject.slice(0,index).concat({ text: wordObject[index].text, value: (wordObject[index].value + 1)}).concat(wordObject.slice(index+1))
    } else {
      wordObject = wordObject.concat({ text: wordList[i], value: 1 })
    }
  }

  const options = {
    fontSizes: [32,64]
  }

  return(
    <div className='wordcloud'>
      <ReactWordcloud words={wordObject} options={options} />
    </div>
  )
}

export default Wordcloud