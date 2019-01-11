import React, { Component } from 'react'

import HotSearchPanel from './HotSearchPanel'

import {
  NavSearch,
  SearchWrapper
} from './searchBarStyle'

class SearchBar extends Component {
  getListArea = () => {
    const {
      currentPage,
      isFocused,
      isHotSearchMouseIn,
      handleChangeHotSearchPage,
      handleHotSearchMouseEnter,
      handleHotSearchMouseLeave,
      hotSearchList,
      totalPage
    } = this.props

    if (isFocused || isHotSearchMouseIn) {
      return (
        <HotSearchPanel
          handleHotSearchMouseEnter={handleHotSearchMouseEnter}
          handleHotSearchMouseLeave={handleHotSearchMouseLeave}
          handleChangeHotSearchPage={handleChangeHotSearchPage}
          currentPage={currentPage}
          totalPage={totalPage}
          hotSearchList={hotSearchList}
        />
      )
    } else {
      return null
    }
  }

  render () {
    const {
      currentSearch,
      isFocused,
      handleSearchFocus,
      handleSearchBlur,
      handleSearchChange,
      hotSearchList
    } = this.props

    return (
      <SearchWrapper>
        <NavSearch
          className={isFocused ? 'focused' : ''}
          onFocus={() => handleSearchFocus(hotSearchList)}
          onBlur={handleSearchBlur}
          onChange={handleSearchChange}
          placeholder='Search...'
          value={currentSearch}
        />

        <i className={isFocused ? 'focused iconfont zoom' : 'iconfont zoom'}>
          &#xe60c;
        </i>

        {this.getListArea()}
      </SearchWrapper>
    )
  }
}

export default SearchBar
