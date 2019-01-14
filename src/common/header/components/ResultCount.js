import React from 'react'
import PropTypes from 'prop-types'

import { numberWithCommas } from '../../../utils/stringFormatter'

import {
  ResultCountWrapper
} from './resultCountStyle'

const ResultCount = ({ articleCount, processingTimeMS }) => {
  const articleCountFormatted = numberWithCommas(articleCount)
  const processingTimeFormatted = processingTimeMS / 1000

  return (
    <ResultCountWrapper data-test='component-resultCount'>
      {articleCountFormatted} results ({processingTimeFormatted} seconds)
    </ResultCountWrapper>
  )
}

ResultCount.propTypes = {
	articleCount: PropTypes.number.isRequired,
	processingTimeMS: PropTypes.number.isRequired
}


export default ResultCount
