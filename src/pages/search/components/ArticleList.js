import React from 'react'
import PropTypes from 'prop-types'

import ArticleItem from './ArticleItem'

import {
  ArticleListWrapper
} from './articleListStyle'

const ArticleList = (props) => {
  const { articleList } = props

  return (
    <ArticleListWrapper>
      {articleList.map(article => (
        <ArticleItem
          key={article.objectID}
          article={article}
        />
      ))}
    </ArticleListWrapper>
  )
}

ArticleList.propTypes = {
	articleList: PropTypes.array
}

export default ArticleList
