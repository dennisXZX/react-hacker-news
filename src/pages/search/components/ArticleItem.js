import React from 'react'

import {
  ArticleItemWrapper,
  Title,
  MetaDataWrapper,
  MetaDataItem
} from './articleItemStyle'

const ArticleItem = (props) => {
  const {
    _highlightResult,
    author,
    created_at_i,
    num_comments,
    points,
    title,
    url
  } = props.article

	const urlFormatted = url && url.length > 120 ? `${url.slice(0, 100)}...` : url

  return (
    title
      ? (
        <ArticleItemWrapper>
          <Title dangerouslySetInnerHTML={{ __html: _highlightResult.title.value }}></Title>
          <MetaDataWrapper>
            <MetaDataItem>{points}</MetaDataItem>
            <MetaDataItem>{author}</MetaDataItem>
            <MetaDataItem>{created_at_i}</MetaDataItem>
            <MetaDataItem>{num_comments}</MetaDataItem>
            <MetaDataItem className="desktop-only">{urlFormatted}</MetaDataItem>
          </MetaDataWrapper>
        </ArticleItemWrapper>
      ) : null
  )

}

export default ArticleItem
