import React, { Component } from 'react'

import HotSearchPanel from './HotSearchPanel'

import { NavSearch, SearchWrapper } from './searchBarStyle'
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
  };

  render() {
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
          placeholder="Search..."
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
  totalPage: PropTypes.number.isRequired
}

export default SearchBar
