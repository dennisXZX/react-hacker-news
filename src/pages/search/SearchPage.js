import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
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
      articleList,
      error,
      currentArticlePage,
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

    if (articleList.length === 0) {
      return (
        <ErrorMessage message="Sorry, no search result for this keyword..." />
      )
    }

    return (
      <ResultWrapper>
        <ResultList articleList={articleList} />
        <Pagination
          currentArticlePage={currentArticlePage}
          currentSearch={currentSearch}
          loadPageData={loadPageData}
        />
      </ResultWrapper>
    )
  }
}

SearchPage.propTypes = {
  loadPageData: PropTypes.func.isRequired,
  articleList: PropTypes.array.isRequired,
  error: PropTypes.object,
  currentArticlePage: PropTypes.number.isRequired,
  currentSearch: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = ({ header, searchPage }) => {
  return {
    articleList: searchPage.articleList,
    currentArticlePage: searchPage.currentArticlePage,
    currentSearch: header.currentSearch,
    isLoading: searchPage.isLoading,
    error: searchPage.error
  }
}

export const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      loadPageData
    },
    dispatch
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage)
