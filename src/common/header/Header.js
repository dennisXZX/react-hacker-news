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
  handleSearchChange
} from './headerActions'

import {
  HeaderWrapper,
  Nav
} from './headerStyle'

class Header extends Component {
  render () {
    const {
      currentPage,
      currentSearch,
      isFocused,
      isHotSearchMouseIn,
      handleChangePage,
      handleHotSearchMouseEnter,
      handleHotSearchMouseLeave,
      handleSearchFocus,
      handleSearchBlur,
      handleSearchChange,
      hotSearchList,
      totalPage
    } = this.props

    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <SearchBar
            currentPage={currentPage}
            currentSearch={currentSearch}
            isFocused={isFocused}
            isHotSearchMouseIn={isHotSearchMouseIn}
            handleChangePage={handleChangePage}
            handleHotSearchMouseEnter={handleHotSearchMouseEnter}
            handleHotSearchMouseLeave={handleHotSearchMouseLeave}
            handleSearchFocus={handleSearchFocus}
            handleSearchBlur={handleSearchBlur}
            handleSearchChange={handleSearchChange}
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
    currentSearch: state.header.currentSearch,
    totalPage: state.header.totalPage,
    isHotSearchMouseIn: state.header.isHotSearchMouseIn,
  }
}

export const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    handleChangePage,
    handleHotSearchMouseEnter,
    handleHotSearchMouseLeave,
    handleSearchBlur,
    handleSearchFocus,
    handleSearchChange
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
