import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ResultList from './components/ResultList'
import Pagination from './components/Pagination'
import Loading from '../../UI/loading/LoadingSpinner'
import ErrorMessage from '../../UI/error/ErrorMessage'

import { loadPageData } from './searchPageActions'
import { ResultWrapper } from './searchPageStyle'

class SearchPage extends Component {
  componentDidMount() {
    const { loadPageData } = this.props

    loadPageData('hello world')
  }

  render() {
    const {
      currentResultPage,
      currentSearch,
      error,
      isLoading,
      loadPageData,
      resultList
    } = this.props

    if (error) {
      return <ErrorMessage message="Sorry, something just went wrong..." />
    }

    if (isLoading) {
      return <Loading loadingText="Loading..." />
    }

    if (resultList.length === 0) {
      return (
        <ErrorMessage message="Sorry, no search result for this keyword..." />
      )
    }

    return (
      <ResultWrapper>
        <ResultList resultList={resultList} />
        <Pagination
          currentResultPage={currentResultPage}
          currentSearch={currentSearch}
          loadPageData={loadPageData}
        />
      </ResultWrapper>
    )
  }
}

SearchPage.propTypes = {
  currentResultPage: PropTypes.number.isRequired,
  currentSearch: PropTypes.string.isRequired,
  error: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  loadPageData: PropTypes.func.isRequired,
  resultList: PropTypes.array.isRequired
}

const mapStateToProps = ({ header, searchPage }) => {
  return {
    currentResultPage: searchPage.currentResultPage,
    currentSearch: header.currentSearch,
    error: searchPage.error,
    isLoading: searchPage.isLoading,
    resultList: searchPage.resultList
  }
}

export const mapDispatchToProps = {
  loadPageData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage)
