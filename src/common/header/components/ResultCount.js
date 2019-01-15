import React from 'react'
import PropTypes from 'prop-types'

import { formatNumWithComma } from '../../../utils/stringFormatter'

import { ResultCountWrapper } from './resultCountStyle'

const ResultCount = ({ resultCount, processingTimeMS }) => {
  const resultCountFormatted = formatNumWithComma(resultCount)
  const processingTimeFormatted = processingTimeMS / 1000

  return (
    <ResultCountWrapper data-test="component-resultCount">
      {resultCountFormatted} results ({processingTimeFormatted} seconds)
    </ResultCountWrapper>
  )
}

ResultCount.propTypes = {
  resultCount: PropTypes.number.isRequired,
  processingTimeMS: PropTypes.number.isRequired
}

export default ResultCount
