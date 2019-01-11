import React from 'react'

import ArticleItem from './ArticleItem'

import {
  ArticleListWrapper
} from './articleListStyle'

const ArticleList = (props) => {
  const { hitArticleList } = props

  return (
    <ArticleListWrapper>
      {hitArticleList.map(article => (
        <ArticleItem
          key={article.objectID}
          article={article}
        />
      ))}
    </ArticleListWrapper>
  )
}

export default ArticleList
