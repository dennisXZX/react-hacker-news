import React from 'react'

import { numberWithCommas } from '../../../utils/stringFormatter'

import {
  ResultCountWrapper
} from './resultCountStyle'

const ResultCount = ({ articleCount, processingTimeMS }) => {
  const articleCountFormatted = numberWithCommas(articleCount)
  const processingTimeFormatted = processingTimeMS / 1000

  return (
    <ResultCountWrapper>
      {articleCountFormatted} results ({processingTimeFormatted} seconds)
    </ResultCountWrapper>
  )
}

export default ResultCount
