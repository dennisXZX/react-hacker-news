import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Logo from './components/Logo'
import SearchBar from './components/SearchBar'

import {
  handleSearchFocus,
  handleSearchBlur,
  handleHotSearchMouseEnter,
  handleHotSearchMouseLeave,
  handleChangePage,
  handleArticleSearch
} from './headerActions'

import {
  HeaderWrapper,
  Nav
} from './headerStyle'

class Header extends Component {
  render () {
    const {
      currentPage,
      isFocused,
      isHotSearchMouseIn,
      handleChangePage,
      handleHotSearchMouseEnter,
      handleHotSearchMouseLeave,
      handleSearchFocus,
      handleSearchBlur,
      handleArticleSearch,
      hotSearchList,
      totalPage
    } = this.props

    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <SearchBar
            currentPage={currentPage}
            isFocused={isFocused}
            isHotSearchMouseIn={isHotSearchMouseIn}
            handleChangePage={handleChangePage}
            handleHotSearchMouseEnter={handleHotSearchMouseEnter}
            handleHotSearchMouseLeave={handleHotSearchMouseLeave}
            handleSearchFocus={handleSearchFocus}
            handleSearchBlur={handleSearchBlur}
            handleArticleSearch={handleArticleSearch}
            hotSearchList={hotSearchList}
            totalPage={totalPage}
          />
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFocused: state.header.isFocused,
    hotSearchList: state.header.hotSearchList,
    currentPage: state.header.currentPage,
    totalPage: state.header.totalPage,
    isHotSearchMouseIn: state.header.isHotSearchMouseIn,
  }
}

export const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    handleSearchFocus,
    handleSearchBlur,
    handleHotSearchMouseEnter,
    handleHotSearchMouseLeave,
    handleChangePage,
    handleArticleSearch
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
