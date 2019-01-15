import React from 'react'
import PropTypes from 'prop-types'

import ResultItemArticle from './ResultItemArticle'
import ResultItemStory from './ResultItemStory'

import { ResultListWrapper } from './resultListStyle'

const ResultList = props => {
  const { articleList } = props

  return (
    <ResultListWrapper>
      {articleList.map(article => (
        article.title
          ? (<ResultItemArticle key={article.objectID} article={article} />)
          : (<ResultItemStory key={article.objectID} article={article} />)
      ))}
    </ResultListWrapper>
  )
}

ResultList.propTypes = {
  articleList: PropTypes.array.isRequired
}

export default ResultList
