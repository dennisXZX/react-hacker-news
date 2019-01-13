import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import ResultCount from './components/ResultCount'

import {
  handleSearchFocus,
  handleSearchBlur,
  handleHotSearchMouseEnter,
  handleHotSearchMouseLeave,
  handleHotSearchClick,
  handleChangeHotSearchPage,
  handleSearchChange
} from './headerActions'

import {
  HeaderWrapper,
  Nav
} from './headerStyle'

class Header extends Component {
  render () {
    const {
      articleCount,
      currentHotSearchPage,
      currentSearch,
      isFocused,
      isHotSearchMouseIn,
      handleChangeHotSearchPage,
      handleHotSearchMouseEnter,
      handleHotSearchMouseLeave,
      handleHotSearchClick,
      handleSearchFocus,
      handleSearchBlur,
      handleSearchChange,
      hotSearchList,
      processingTimeMS,
      totalPage
    } = this.props

    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <SearchBar
            currentHotSearchPage={currentHotSearchPage}
            currentSearch={currentSearch}
            handleChangeHotSearchPage={handleChangeHotSearchPage}
            handleHotSearchMouseEnter={handleHotSearchMouseEnter}
            handleHotSearchMouseLeave={handleHotSearchMouseLeave}
            handleHotSearchClick={handleHotSearchClick}
            handleSearchFocus={handleSearchFocus}
            handleSearchBlur={handleSearchBlur}
            handleSearchChange={handleSearchChange}
            hotSearchList={hotSearchList}
            isFocused={isFocused}
            isHotSearchMouseIn={isHotSearchMouseIn}
            totalPage={totalPage}
          />
        </Nav>
        <ResultCount
          articleCount={articleCount}
          processingTimeMS={processingTimeMS}
        />
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    articleCount: state.searchPage.articleCount,
    currentHotSearchPage: state.header.currentHotSearchPage,
    currentSearch: state.header.currentSearch,
    hotSearchList: state.header.hotSearchList,
    isFocused: state.header.isFocused,
    isHotSearchMouseIn: state.header.isHotSearchMouseIn,
    processingTimeMS: state.searchPage.processingTimeMS,
    totalPage: state.header.totalPage,
  }
}

export const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    handleChangeHotSearchPage,
    handleHotSearchMouseEnter,
    handleHotSearchMouseLeave,
    handleHotSearchClick,
    handleSearchBlur,
    handleSearchFocus,
    handleSearchChange
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
