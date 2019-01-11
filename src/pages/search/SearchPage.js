import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ArticleList from './components/ArticleList'

import {
  loadInitialPageData
} from './searchPageActions'

import {
  ResultWrapper,
  PaginationWrapper
} from './searchPageStyle'


class SearchPage extends Component {
  handlePageClick = (data) => {
    console.log(data)
  }

  render () {
    const { articleList } = this.props

    return (
      <ResultWrapper>
        <ArticleList
          articleList={articleList}
        />
        <PaginationWrapper>
          <ReactPaginate
            activeClassName="paginationActive"
            pageCount={30}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            containerClassName="paginationContainer"
            pageClassName="paginationPage"
            previousClassName="paginationPrevious"
            nextClassName="paginationNext"
            onPageChange={this.handlePageClick}
          />
        </PaginationWrapper>
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
