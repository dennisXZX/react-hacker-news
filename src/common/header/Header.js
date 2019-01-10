import React, { Component } from 'react'
import { connect } from 'react-redux'

import Logo from './components/Logo'
import SearchBar from './components/SearchBar'

import * as headerActions from './headerActions'

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

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus (hotSearchList) {
      (hotSearchList.length <= 0) && dispatch(headerActions.getHotSearchList())

      dispatch(headerActions.searchFocus())
    },

    handleSearchBlur () {
      dispatch(headerActions.searchBlur())
    },

    handleHotSearchMouseEnter () {
      dispatch(headerActions.hotSearchMouseEnter())
    },

    handleHotSearchMouseLeave () {
      dispatch(headerActions.hotSearchMouseLeave())
    },

    handleChangePage (currentPage, totalPage, spinIcon) {
      const originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
      const originAngleNum = originAngle ? parseInt(originAngle, 10) : 0
      spinIcon.style.transform = `rotate(${originAngleNum + 360}deg)`

      if (currentPage < totalPage) {
        dispatch(headerActions.changePage(currentPage + 1))
      } else {
        dispatch(headerActions.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
