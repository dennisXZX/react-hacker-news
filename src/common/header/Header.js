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
      totalPage
    } = this.props

    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <SearchBar
            currentHotSearchPage={currentHotSearchPage}
            currentSearch={currentSearch}
            isFocused={isFocused}
            isHotSearchMouseIn={isHotSearchMouseIn}
            handleChangeHotSearchPage={handleChangeHotSearchPage}
            handleHotSearchMouseEnter={handleHotSearchMouseEnter}
            handleHotSearchMouseLeave={handleHotSearchMouseLeave}
            handleHotSearchClick={handleHotSearchClick}
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

const mapStateToProps = state => {
  return {
    isFocused: state.header.isFocused,
    hotSearchList: state.header.hotSearchList,
    currentHotSearchPage: state.header.currentHotSearchPage,
    currentSearch: state.header.currentSearch,
    totalPage: state.header.totalPage,
    isHotSearchMouseIn: state.header.isHotSearchMouseIn,
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
