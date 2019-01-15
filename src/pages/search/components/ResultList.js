import React from 'react'
import PropTypes from 'prop-types'

import ResultItemArticle from './ResultItemArticle'
import ResultItemStory from './ResultItemStory'

import { ResultListWrapper } from './resultListStyle'

const ResultList = props => {
  const { resultList } = props

  return (
    <ResultListWrapper>
      {resultList.map(result => (
        result.title
          ? (<ResultItemArticle key={result.objectID} result={result} />)
          : (<ResultItemStory key={result.objectID} result={result} />)
      ))}
    </ResultListWrapper>
  )
}

ResultList.propTypes = {
  resultList: PropTypes.array.isRequired
}

export default ResultList
