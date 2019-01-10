import React, { Component } from 'react'
import { connect } from 'react-redux'

import ArticleList from './components/ArticleList'

import { loadInitialPageData } from './searchPageActions'

import {
  ResultWrapper
} from './searchPageStyle'

class SearchPage extends Component {
  render () {
    const { hitArticleList } = this.props

    return (
      <ResultWrapper>
        <ArticleList
          hitArticleList={hitArticleList}
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
    hitArticleList: state.searchPage.hitArticleList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadInitialPageData () {
      dispatch(loadInitialPageData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
