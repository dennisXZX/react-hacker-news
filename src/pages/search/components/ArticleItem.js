import React from 'react'

import {
  ArticleItemWrapper,
  Title,
  MetaDataWrapper,
  MetaDataItem
} from './articleItemStyle'

const ArticleItem = (props) => {
  const {
    title,
    points,
    author,
    created_at_i,
    num_comments,
    url
  } = props.article

  return (
    title
      ? (
        <ArticleItemWrapper>
          <Title>{title}</Title>
          <MetaDataWrapper>
            <MetaDataItem>{points}</MetaDataItem>
            <MetaDataItem>{author}</MetaDataItem>
            <MetaDataItem>{created_at_i}</MetaDataItem>
            <MetaDataItem>{num_comments}</MetaDataItem>
            <MetaDataItem className="desktop-only">{url}</MetaDataItem>
          </MetaDataWrapper>
        </ArticleItemWrapper>
      ) : null
  )

}

export default ArticleItem
