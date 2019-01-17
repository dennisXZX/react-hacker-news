import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import { formatUrl } from '../../../utils/stringFormatter'

import {
  ResultItemWrapper,
  Title,
  MetaDataWrapper,
  MetaDataItem
} from './resultItemStyle'

class ResultItemArticle extends PureComponent {
  render () {
    const {
      _highlightResult,
      author,
      created_at,
      num_comments,
      points,
      title,
      url
    } = this.props.result

    return title ? (
      <ResultItemWrapper>
        <Title
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          dangerouslySetInnerHTML={{ __html: _highlightResult.title.value }}
        />
        <MetaDataWrapper>
          <MetaDataItem>{points} {points > 1 ? 'points' : 'point'}</MetaDataItem>
          <MetaDataItem>{author}</MetaDataItem>
          <MetaDataItem>{distanceInWordsToNow(created_at)}</MetaDataItem>
          <MetaDataItem>{num_comments} {num_comments > 1 ? 'comments' : 'comment'}</MetaDataItem>
          <MetaDataItem className="desktop-only">
            <a href={url} target="_blank" rel="noopener noreferrer">
              ({url ? formatUrl(url) : 'no url available'})
            </a>
          </MetaDataItem>
        </MetaDataWrapper>
      </ResultItemWrapper>
    ) : null
  }
}

ResultItemArticle.propTypes = {
  result: PropTypes.object.isRequired
}

export default ResultItemArticle
