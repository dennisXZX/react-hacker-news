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
      resultList,
      error,
      currentResultPage,
      currentSearch,
      isLoading,
      loadPageData
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
  loadPageData: PropTypes.func.isRequired,
  resultList: PropTypes.array.isRequired,
  error: PropTypes.object,
  currentResultPage: PropTypes.number.isRequired,
  currentSearch: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = ({ header, searchPage }) => {
  return {
    resultList: searchPage.resultList,
    currentResultPage: searchPage.currentResultPage,
    currentSearch: header.currentSearch,
    isLoading: searchPage.isLoading,
    error: searchPage.error
  }
}

export const mapDispatchToProps = {
  loadPageData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage)
