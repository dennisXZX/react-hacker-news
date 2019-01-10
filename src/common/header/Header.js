import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as headerActions from './headerActions'

import {
  HeaderWrapper,
  HotSearch,
  Logo,
  Nav,
  NavSearch,
  SearchWrapper,
  SearchInfoItem,
  SearchInfoList,
  SearchInfoSwitch,
  SearchInfoTitle
} from './headerStyle'

class Header extends Component {
  getCurrentPageItems = () => {
    const {
      hotSearchList,
      currentPage,
    } = this.props

    const pageList = []

    if (hotSearchList.length) {
      for (let i = (currentPage - 1) * 7; i < currentPage * 7; i++) {
        pageList.push(
          <SearchInfoItem key={hotSearchList[i]}>
            {hotSearchList[i]}
          </SearchInfoItem>
        )
      }
    }

    return pageList
  }

  getListArea = () => {
    const {
      isFocused,
      isHotSearchMouseIn,
      handleChangePage,
      handleHotSearchMouseEnter,
      handleHotSearchMouseLeave,
      currentPage,
      totalPage
    } = this.props

    if (isFocused || isHotSearchMouseIn) {
      return (
        <HotSearch
          onMouseEnter={handleHotSearchMouseEnter}
          onMouseLeave={handleHotSearchMouseLeave}>

          <SearchInfoTitle>
            Hot Searches
            <SearchInfoSwitch onClick={() => handleChangePage(currentPage, totalPage, this.spinIcon)}>
              <i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>
                &#xe851;
              </i>
              Change
            </SearchInfoSwitch>
          </SearchInfoTitle>

          <SearchInfoList>
            {this.getCurrentPageItems()}
          </SearchInfoList>
        </HotSearch>
      )
    } else {
      return null
    }
  }

  render () {
    const {
      isFocused,
      handleSearchFocus,
      handleSearchBlur,
      hotSearchList
    } = this.props

    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <SearchWrapper>
            <NavSearch
              className={isFocused ? 'focused' : ''}
              onFocus={() => handleSearchFocus(hotSearchList)}
              onBlur={handleSearchBlur}
              placeholder='Search...'
            />

            <i className={isFocused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe60c;
            </i>

            {this.getListArea()}
          </SearchWrapper>
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
