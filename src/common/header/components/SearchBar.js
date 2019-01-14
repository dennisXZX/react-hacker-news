import React, { Component } from 'react'

import HotSearchPanel from './HotSearchPanel'

import {
  NavSearch,
  SearchWrapper
} from './searchBarStyle'
import PropTypes from 'prop-types'

class SearchBar extends Component {
  getListArea = () => {
    const {
      currentHotSearchPage,
      isFocused,
      isHotSearchMouseIn,
      handleChangeHotSearchPage,
      handleHotSearchMouseEnter,
      handleHotSearchMouseLeave,
      handleHotSearchClick,
      hotSearchList,
      totalPage
    } = this.props

    if (isFocused || isHotSearchMouseIn) {
      return (
        <HotSearchPanel
          handleHotSearchMouseEnter={handleHotSearchMouseEnter}
          handleHotSearchMouseLeave={handleHotSearchMouseLeave}
          handleChangeHotSearchPage={handleChangeHotSearchPage}
          handleHotSearchClick={handleHotSearchClick}
          currentHotSearchPage={currentHotSearchPage}
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

SearchBar.propTypes = {
	articleCount: PropTypes.number,
	currentHotSearchPage: PropTypes.number,
	currentSearch: PropTypes.string,
	isFocused: PropTypes.bool,
	isHotSearchMouseIn: PropTypes.bool,
	handleChangeHotSearchPage: PropTypes.func,
	handleHotSearchMouseEnter: PropTypes.func,
	handleHotSearchMouseLeave: PropTypes.func,
	handleHotSearchClick: PropTypes.func,
	handleSearchFocus: PropTypes.func,
	handleSearchBlur: PropTypes.func,
	handleSearchChange: PropTypes.func,
	hotSearchList: PropTypes.array,
	totalPage: PropTypes.number
}

export default SearchBar
