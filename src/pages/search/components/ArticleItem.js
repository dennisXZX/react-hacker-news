import React from 'react'
import PropTypes from 'prop-types'

import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

import {
  ArticleItemWrapper,
  Title,
  MetaDataWrapper,
  MetaDataItem
} from './articleItemStyle'

const ArticleItem = props => {
  const {
    _highlightResult,
    author,
    created_at,
    num_comments,
    points,
    title,
    url
  } = props.article

  const urlFormatted =
    url && url.length > 120 ? `${url.slice(0, 100)}...` : url

  return title ? (
    <ArticleItemWrapper>
      <Title
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        dangerouslySetInnerHTML={{ __html: _highlightResult.title.value }}
      />
      <MetaDataWrapper>
        <MetaDataItem>{points} points</MetaDataItem>
        <MetaDataItem>{author}</MetaDataItem>
        <MetaDataItem>{distanceInWordsToNow(created_at)}</MetaDataItem>
        <MetaDataItem>{num_comments} comments</MetaDataItem>
        <MetaDataItem className="desktop-only">
          <a href={url} target="_blank" rel="noopener noreferrer">
            ({urlFormatted})
          </a>
        </MetaDataItem>
      </MetaDataWrapper>
    </ArticleItemWrapper>
  ) : null
}

ArticleItem.propTypes = {
  article: PropTypes.object.isRequired
}

export default ArticleItem
