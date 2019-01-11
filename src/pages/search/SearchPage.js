import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ArticleList from './components/ArticleList'

import {
  loadInitialPageData
} from './searchPageActions'

import {
  ResultWrapper
} from './searchPageStyle'


class SearchPage extends Component {
  render () {
    const { articleList } = this.props

    return (
      <ResultWrapper>
        <ArticleList
          articleList={articleList}
        />
      </ResultWrapper>
    )
  }

  componentDidMount () {
    this.props.loadInitialPageData()
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.searchPage.articleList
  }
}

export const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    loadInitialPageData
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
