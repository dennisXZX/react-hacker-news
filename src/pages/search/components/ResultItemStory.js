import React from 'react'
import PropTypes from 'prop-types'

import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import { formatUrl } from '../../../utils/stringFormatter'

import {
  ResultItemWrapper,
  Title,
  MetaDataWrapper,
  MetaDataItem
} from './resultItemStyle'

const ResultItemStory = props => {
  const {
    _highlightResult,
    author,
    created_at,
    story_title,
    story_url
  } = props.result

  return story_title ? (
    <ResultItemWrapper>
      <Title
        href={story_url}
        target="_blank"
        rel="noopener noreferrer"
        dangerouslySetInnerHTML={{ __html: _highlightResult.story_title.value }}
      />
      <MetaDataWrapper>
        <MetaDataItem>{author}</MetaDataItem>
        <MetaDataItem>{distanceInWordsToNow(created_at)}</MetaDataItem>
        <MetaDataItem className="desktop-only">
          <a href={story_url} target="_blank" rel="noopener noreferrer">
            ({story_url ? formatUrl(story_url) : 'no url available'})
          </a>
        </MetaDataItem>
      </MetaDataWrapper>
    </ResultItemWrapper>
  ) : null
}

ResultItemStory.propTypes = {
  result: PropTypes.object.isRequired
}

export default ResultItemStory
