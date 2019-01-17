import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

import { HeaderWrapper, Nav } from './headerStyle'

class Header extends Component {
  render() {
    const {
      resultCount,
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
          resultCount={resultCount}
          processingTimeMS={processingTimeMS}
        />
      </HeaderWrapper>
    )
  }
}

Header.propTypes = {
  resultCount: PropTypes.number.isRequired,
  currentHotSearchPage: PropTypes.number.isRequired,
  currentSearch: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
  isHotSearchMouseIn: PropTypes.bool.isRequired,
  handleChangeHotSearchPage: PropTypes.func.isRequired,
  handleHotSearchMouseEnter: PropTypes.func.isRequired,
  handleHotSearchMouseLeave: PropTypes.func.isRequired,
  handleHotSearchClick: PropTypes.func.isRequired,
  handleSearchFocus: PropTypes.func.isRequired,
  handleSearchBlur: PropTypes.func.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  hotSearchList: PropTypes.array.isRequired,
  processingTimeMS: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired
}

const mapStateToProps = ({ header, searchPage }) => {
  return {
    resultCount: searchPage.resultCount,
    currentHotSearchPage: header.currentHotSearchPage,
    currentSearch: header.currentSearch,
    hotSearchList: header.hotSearchList,
    isFocused: header.isFocused,
    isHotSearchMouseIn: header.isHotSearchMouseIn,
    processingTimeMS: searchPage.processingTimeMS,
    totalPage: header.totalPage
  }
}

export const mapDispatchToProps = {
  handleChangeHotSearchPage,
  handleHotSearchMouseEnter,
  handleHotSearchMouseLeave,
  handleHotSearchClick,
  handleSearchBlur,
  handleSearchFocus,
  handleSearchChange
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
