import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ArticleList from './components/ArticleList'
import Pagination from './components/Pagination'

import {
  loadPageData
} from './searchPageActions'

import {
  ResultWrapper
} from './searchPageStyle'


class SearchPage extends Component {
  componentDidMount () {
    const { loadPageData } = this.props

    loadPageData('hello world')
  }

  render () {
    const {
      articleList,
      currentArticlePage,
      currentSearch,
      loadPageData
    } = this.props

    return (
      <ResultWrapper>
        <ArticleList
          articleList={articleList}
        />
        <Pagination
          currentArticlePage={currentArticlePage}
          currentSearch={currentSearch}
          loadPageData={loadPageData}
        />
      </ResultWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    articleList: state.searchPage.articleList,
    currentArticlePage: state.searchPage.currentArticlePage,
    currentSearch: state.header.currentSearch
  }
}

export const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    loadPageData
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
